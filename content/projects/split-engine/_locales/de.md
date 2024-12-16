# Split Engine
Split Engine ist eine Game-Engine, geschrieben in C++ mit Vulkan als Graphics-API.
Ich habe sie erstellt, um mich auf meine Bachelorarbeit vorzubereiten und mein Verständnis von C++ zu vertiefen sowie Vulkan zu lernen, 
basierend auf meiner vorherigen Erfahrung mit OpenGL aus meiner letzten Spiel-Engine.
(Siehe Projekt C++ Game Engine für mehr Informationen dazu)

## Features

### Build-System
Anstelle der ausschliesslichen Nutzung einer Visual Studio-Projektdatei, wie bei meiner letzten Engine, 
habe ich [CMake](https://cmake.org) zusammen mit [VCPKG](https://vcpkg.io) verwendet, um das Build-System und die Abhängigkeiten zu verwalten.

### Rendering
Die Game-Engine verwendet Vulkan für das Rendering, um genauer zu sein C++-Header der API.
Zusätzlich zu diesen Headern nutze ich [SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross), um automatisch Vulkan-Pipelines und Descriptor-Sets aus Shadern zu generieren.

### Audio
Audio war bei der Erstellung der Engine definitiv kein Schwerpunkt, daher enthält sie nur eine grundlegende Implementierung der [SoLoud](https://solhsa.com/soloud/) Library.

### Input
Wie Audio wurde das Input-System auch eher simpel implementiert. Alles ist über eine statische Klasse verwaltet und basiert auf Actions.

```cpp
enum class InputAction
{
    Move,
    Fire,
    Fly,
    Jump,
};

// Register actions
Input::RegisterAxis2D(InputAction::Fly, { KeyCode::A, KeyCode::D }, { KeyCode::S, KeyCode::W });
Input::RegisterAxis(InputAction::Move, { KeyCode::A, KeyCode::D });
Input::RegisterButtonAction(InputAction::Fire, KeyCode::MOUSE_LEFT);
Input::RegisterButtonAction(InputAction::Jump, KeyCode::SPACE);

// Read values
bool jumped = Input::GetButtonActionPressed(InputAction::Jump);
float moveDirection = Input::GetAxisActionDown(InputAction::Move);
glm::vec2 flyDirection = Input::GetAxis2DActionDown(InputAction::Fly);
```


### GameObject Management
Der grösste und komplexeste Teil der Engine ist das selbst entwickelte Entity Component System (ECS).
Es besteht aus den folgenden Komponenten:

#### Entities
Eine Entity besteht logisch aus Components, ist in der Praxis jedoch nur eine ID, 
die verwendet wird, um in der ECS-Registry nach ihren Components zu suchen, 
da diese nicht individuell durch jede Entität selbst verwaltet werden.

#### Components
Ein Component besteht typischerweise nur aus reinen Daten und ist immer einer Entity zugeordnet.
```cpp
struct SpriteRenderer
{
    AssetHandle<Sprite> SpriteTexture;
    float               AnimationSpeed    = 0;
    float               CurrentFrame      = 0;
    uint32_t            PreviousTextureID = 0;
};
```

Ein Component kann auch Funktionen enthalten, die auf Daten wirken, aber die meisten Operationen sollten innerhalb eines Systems durchgeführt werden.

#### Systems
Ein System arbeitet auf spezifischen Components, die über Template-Argumente definiert sind.

```cpp
class PlayerAnimation final : public ECS::System<Component::Player, Component::SpriteRenderer>
{
    protected:
        void Execute(Component::Player*         players,
                     Component::SpriteRenderer* spriteRenderers,
                     std::vector<uint64_t>&     entities,
                     ECS::ContextProvider&      contextProvider,
                     uint8_t                    stage) override;
};
```

In diesem Beispiel arbeitet es nur auf Entities, die sowohl einen Player- als auch einen SpriteRenderer-Component besitzen.

#### Contexts
Contexts werden über einen Context Provider, der in jedes System übergeben wird, abgerufen. 
Sie ermöglichen das Teilen von Daten zwischen Systemen ohne direkte Referenzen.

```cpp
Rendering::Renderer* renderer = contextProvider.GetContext<RenderingContext>()->Renderer;
```

Mehrere Systeme, die Zugriff auf den Renderer der Engine benötigen, können ihn beispielsweise über den Rendering-Kontext erhalten.
Benutzer können auch eigene Kontexte registrieren.


```cpp
ECS::Registry& ecs = application.GetECSRegistry();
ecs.RegisterContext<Context::ImGui>({});
```

#### Stages
Wie oben zu sehen, wird ein Stage-Parameter an die Execute-Funktion jedes Systems übergeben. Dieser Parameter ist nützlich, wenn ein System mehrmals pro Frame ausgeführt werden soll. 
Zum Beispiel werden in Unity die Funktionen Update und LateUpdate zu unterschiedlichen Zeitpunkten im Frame ausgeführt. 
Mit dem Stage-System kann eine einfache If-Abfrage in der Execute-Funktion bestimmen, welche Stufe gerade aktiv ist.

```cpp
if (stage == Stage::Update)
{
    // Perform Update logic
}

if (stage == Stage::LateUpdate)
{
    // Perform LateUpdate logic
}
```

Für fortgeschrittenere Anwendungen kann die System-Klasse erweitert werden, 
um Stages in eigene Funktionen zu abstrahieren, die dann in abgeleiteten Klassen überschrieben werden können.
Dieses System bietet Benutzern grosse Flexibilität, um eigene Stages zu definieren und sich in die Stages der Engine einzuklinken.

#### Groups
Gruppen sind eine Möglichkeit, ein Level-System mit dem ECS-System zu realisieren. 
Gruppen sind nichts weiter als eine ID. 
Jede Entity gehört standardmässig immer zu einer Gruppe, die ich als primäre Gruppe bezeichne. 
Die primäre Gruppe kann geändert werden, sodass alle folgenden Entities in ihr erstellt werden. 
Benutzer können auch eine bestimmte Gruppe bei der Erstellung von Entitäten angeben, um mehrere Level gleichzeitig aktiv zu haben oder ein Level immer aktiv zu halten. 
Um beispielsweise ein Level zu wechseln, kann eine Funktion in der ECS-Registrierung aufgerufen werden, die alle Entitäten einer bestimmten Gruppe löscht.

### Distribution
Ich wollte diese Engine als Basis für meine Bachelorarbeit nutzen und daher einfach in ein neues Projekt einbinden können.
Da ich bereits VCPKG zur Verwaltung meiner Abhängigkeiten verwende, wollte ich die Engine auch darüber verteilen können. 
In VCPKG kann man ein eigenes Paket-Repository erstellen, das Pakete enthält, die nicht in den offiziellen Repositories verfügbar sind. 
Nach einigen Versuchen und Fehlern habe ich es geschafft, ein solches Repository zu erstellen. 
Man muss es lediglich in der VCPKG-Konfigurationsdatei hinzufügen.
```json
{
  "registries": [
    {
      "kind": "git",
      "repository": "https://github.com/xWinuX/vcpkg-registry",
      "baseline": "47682ab536513636987c082649fde0bbe658ba04",
      "packages": [
        "split-engine"
      ]
    }
  ]
}
```

## Reflexion

### Was ich gelernt habe

#### Vulkan
Das war mein erster Einsatz von Vulkan und deswegen war alles neu im Bezug zu dem. 
Es gibt noch viele Dinge, die ich nicht umgesetzt habe, aber ich verstehe die Grundkonzepte der API.

#### CMake
Auch CMake habe ich zum ersten Mal verwendet.
Der Einstieg war etwas schwierig, aber letztendlich ist es viel flexibler und besser als die alleinige Nutzung von Visual Studio-Projektdateien
und ich werde es in zukünftigen C++-Projekten weiter verwenden.

#### VCPKG
VCPKG habe ich schon bei meinem ersten Spiel-Engine-Projekt ausprobiert, mich damals jedoch entschieden, meine Abhängigkeiten manuell zu verwalten, was ein grosser Fehler war.
Diesmal habe ich mir die Zeit genommen, es richtig zu lernen, und es hat mir viel Zeit gespart und das Abhängigkeitsmanagement erheblich erleichtert. 
Der einzige Nachteil ist, dass nicht jede Abhängigkeit, die ich nutze, ein Paket darin hat, wie z.B. SoLoud.

#### C++
Das ist mein zweites Projekt in C++, und ich habe viel aus meinem vorherigen Projekt gelernt, um die Codequalität zu verbessern.
In meiner alten Engine verwendete ich viele raw Pointer und manuell verwalteten Speicher. 
Nun verwende ich wenn möglich Smart-Pointer und STD-Container. 
Ich habe den Code auch wesentlich besser strukturiert und modularer gestaltet.

### Dinge, die besser sein könnten

#### Mehr ein Framework als eine Engine
Das ganze Projekt ist mehr ein Framework als eine Engine, da es nicht unbedingt viele vordefinierten Components for sachen wie Rendering oder Audio abspielen besitzt.
Der Benuzer sollte diese selbst implementieren, damit er diese strukturieren kann, wie er es will.

#### Audio
Audio, wie vorher bereits erwähnt, ist recht simpel implementiert, das ist bestimmt ein Punkt wo die Engine noch massiv verbessert werden könnte.

#### Model Importer
Die Engine besitzt keinen Weg, Model-Files (FBX, GLTF, OBJ) zu importieren, der Benutzer müsste dies selbst machen.
 
#### Besserer Input
Das Input System an sich ist auch eher simpel und nicht wirklich sauber implementiert. Sachen wie Kontroller-Support fehlen auch noch.

## Resultate

### Source Code
Das Projekt ist vollständig Open Source und verfügbar hier: [https://github.com/xWinuX/SplitEngine](https://github.com/xWinuX/SplitEngine) \
Die VCPKG-Registry findet sich hier: [https://github.com/xWinuX/vcpkg-registry](https://github.com/xWinuX/vcpkg-registry)

### Note
Dieses Projekt diente als Vorbereitung für meine Bachelorarbeit und wurde auch benotet.
Die Endnote war eine First+ (University of Hertfordshire Notensystem), was auf der Schweizer Notenskala einer 6.0 entspricht.

