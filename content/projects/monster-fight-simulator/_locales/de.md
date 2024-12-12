# C++ Game Engine
Monster Fight Simulator war ein kleines Projekt, das ich für mein Studium machen musste.
Es beinhaltete die Erstellung einer Konsolenanwendung, in der der Benutzer zwei verschiedene Monster verschiedener Rassen erstellen, deren Werte anpassen und sie dann gegeneinander kämpfen lassen konnte.
Da ich etwas mehr Zeit hatte und mich selbst herausfordern wollte, habe ich eine kleine Engine darum herumgebaut, die vollständig in einem Windows-Konsolenfenster läuft.
Das Spiel selbst kann unten angesehen werden:

::video-player{src="../media/gameplay.mp4"}
::

## Features
Das Spiel selbst ist einfach. Der Benutzer kann zwischen drei Rassen wählen und dann jedem Monster einen Namen geben und seine Werte anpassen.
Jedes Volk hat unterschiedliche Bereiche in jeder Statistik, daher haben manche beispielsweise eine höhere maximale Lebenspunktezahl als andere.
\
\
Das Interessante an dem Projekt selbst ist die Konsolen-Engine, in der es läuft.


### Rendering
Da die gesamte Engine in einem Konsolenfenster läuft, besteht das gesamte Rendering im darin, herauszufinden, wo bestimmte Zeichen in der Konsole angezeigt werden müssen.
Es gibt eine Liste von Strings, die den aktuellen Frame darstellt.  Dabei entspricht die Länge jedes Strings der Fensterbreite und die Anzahl der Strings in der Liste der Fensterhöhe.
Für das Zeichnen der Objekte selbst gibt es Sprites, die ebenfalls nur Listen von Strings sind und mehrere Frames für Animationen haben können.


```csharp
new SpriteData(1f, OriginHelper.Preset.MiddleCenter, new[]
{
    new[]
    {
        " o ",
        "/|\\",
        "/ \\ ",
    },
    new[]
    {
        " o ",
        "|||",
        "/ \\ ",
    }
})
```

Bei jedem Frame füllt die Engine die aktuelle Liste der Strings mit leeren Zeichen und rendert dann jeden Sprite darauf.
Sprites können unterschiedliche Tiefen haben, sodass sie sich über oder unter anderen Sprites befinden können.
Standardmäßig zeichnen Sprites immer die gesamte Fläche, die sie bedecken, auch wenn der Sprite "transparente" Bereiche enthält.
Dies kann geändert werden, indem man ein "&"-Zeichen verwendet, das in echte Transparenz umgewandelt wird, sodass Sprites durch andere Sprites sichtbar sind.
\
\
Es ist auch möglich, Strings direkt im aktuellen Frame darzustellen, ohne einen Sprite zu verwenden.
Dies macht das Rendern dynamischer Daten wesentlich einfacher.
```csharp
RenderStringAt(Transform.Position + Vector2.Down * 10f, new[]
{
    "Health:  " + _races[_selector.Position.Y].RangeProfile.HealthRange,
    "Attack:  " + _races[_selector.Position.Y].RangeProfile.AttackRange,
    "Defense  " + _races[_selector.Position.Y].RangeProfile.DefenseRange,
    "Speed:   " + _races[_selector.Position.Y].RangeProfile.SpeedRange
}, OriginHelper.Preset.MiddleCenter);
```

::auto-video{src="../media/rendering.mp4"}
::

### Game Object Management
Es gibt Game Objects mit vordefinierten Eigenschaften wie einen Transform.
Davon abgeleitet sind zwei Child Classes, Actor und SpriteObject.
Actors sollten hauptsächlich für interaktive Spielobjekte im Spiel verwendet werden, und SpriteObjects sollten nur für visuelle Effekte und die Benutzeroberfläche verwendet werden,
da sie weniger Ressourcen benötigen als Schauspieler.
Jedes Game Object hat virtuelle Methoden wie Start und Update, die während des Game-Loops aufgerufen werden.

```csharp
public class ActorPlayer : Actor
{
    private Vector2 _velocity = Vector2.Zero;

    private readonly Range _maxSpeed = new Range(-3.0f, 3.0f);

    private const float Friction = 10.0f;

    private readonly Sprite _idleSprite = SpriteDatabase.SprPlayerIdle;
    private readonly Sprite _walkSprite = SpriteDatabase.SprPlayerWalk;

    public ActorPlayer()
    {
        Sprite = _idleSprite;
    }

    public override void Update()
    {
        base.Update();

        // Acceleration
        _velocity += new Vector2(
            Convert.ToInt32(InputDown(ConsoleKey.RightArrow)) - Convert.ToInt32(InputDown(ConsoleKey.LeftArrow)),
            Convert.ToInt32(InputDown(ConsoleKey.DownArrow)) - Convert.ToInt32(InputDown(ConsoleKey.UpArrow))
        ) * 10.0f * Game.DeltaTime;

        // Limit max speed
        _velocity = new Vector2(MyMathF.Clamp(_velocity.X, _maxSpeed), MyMathF.Clamp(_velocity.Y, _maxSpeed));

        // Approximate friction
        _velocity *= 1.0f / (1.0f + (Game.DeltaTime * Friction));

        // Set position on Transform
        Transform.Position += _velocity;

        // Update Camera
        Game.Camera.SetTarget(Transform.Position);

        // Update sprite
        float length = MathF.Sqrt(_velocity.X * _velocity.X + _velocity.Y * _velocity.Y);
        Sprite = length > 0.001f ? _walkSprite : _idleSprite;
    }
}
```

### Room Management
Game Objects sind immer Teil eines Raumes.
Alle Room-Objekte leiten sich von einer Room-Basisklasse ab, die einige häufig verwendete Methoden und Eigenschaften bereitstellt.

```csharp
public class RoomTitle : Room
{
    public override void Setup()
    {
        AddGameObject<ActorTitle>(1, Game.Camera.Size / 2 + Vector2Int.Up * 6);
        
        AddSpriteObject(1, Game.Camera.Size - SpriteDatabase.SprControls.Data.Size - Vector2Int.One, SpriteDatabase.SprControls);

        // Create rain particles
        for (int i = 0; i < 100; i++) { AddGameObject<ActorRainParticle>(0, Vector2Int.Zero); }
    }
}
```

In der Game-Klasse selbst kann man den Start-Room setzen.

```csharp
public class MonsterFightGame : Game
{
    public MonsterFightGame(Vector2Int gameSize) : base(gameSize) { RoomGoto<RoomTitle>(); }
}
```

Andere Spielobjekte können auch RoomGoto aufrufen, um Räume zu wechseln.

## Reflexion

### Was ich gelernt habe

#### Konsolenfenster managen
Ich habe so etwas noch nicht wirklich gemacht, daher habe ich viele Konsolenfensterfunktionen verwendet, die ich normalerweise nicht verwenden würde.
Es war sehr zufriedenstellend, als der erste Sprite korrekt gerendert wurde.

### Dinge, die besser sein könnten

#### Bessere Game Objects
Die Spielobjekte sind ziemlich starr, und ich wünschte irgendwie, ich hätte ein Komponentensystem hinzugefügt.
Da dieses Projekt aber nicht benotet wurde und andere Projekte höhere Priorität hatten, musste ich einige Kompromisse eingehen.

## Resultate

### Source Code
Das Projekt ist vollständig Open Source und verfügbar hier: [https://github.com/xWinuX/MonsterFightSimulator](https://github.com/xWinuX/MonsterFightSimulator)
