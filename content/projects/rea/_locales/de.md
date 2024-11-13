# REA
REA ist eine von [Noita](https://noitagame.com) inspirierte Simulation, die jedes einzelne Pixel in einem Raster simuliert.
Die Anwendung basiert auf meiner eigenen Game-Engine (weitere Infos dazu im Split Engine-Projekt).
Sie war das Hauptthema meines Bachelorarbeitsprojekts, und alle Simulationsfunktionen sind im untenstehenden Video zu sehen.

::youtube-embed{videoId="Z3g9vX-LSzQ"}
::

## Features
Die Simulation nutzt Multithreading und Compute-Shader, um Tausende von Pixeln effizient zu simulieren und enthält folgende Funktionen:
- Einen Editor, mit dem man mit allen vorhandenen Pixeltypen experimentieren kann.
- Einen Explorationsmodus, der eine prozedural generierte, einfache Welt erstellt, in der der Spieler eine Figur bewegen kann.
- Pixel können folgende Eigenschaften haben:
  - Sand-ähnliches Verhalten
  - Flüssigkeits- und Gas-ähnliches Verhalten
  - Temperatur-Interaktionen
  - Elektrizitäts-Interaktionen
  - Säure-Interaktionen
  - Teil eines Rigidbodies sein, der mit der [Box2D](https://box2d.org)-Physik-Engine alle enthaltenen Pixel bewegt

## Reflexion

### Was ich gelernt habe

#### Compute Shaders
Dies war meine erste umfangreiche Erfahrung mit Compute-Shadern, die mich dazu brachte, 
viel über die GPU-Architektur zu lernen und Code sowie Daten dafür zu optimieren.

#### Vulkan 
Durch die Arbeit mit Compute-Shadern vertiefte ich mein Verständnis von Vulkan, 
insbesondere von Queues und Pufferstrukturen, da ich Compute-Shader-Unterstützung in meine Engine einbauen musste.

#### Box2D
Obwohl ich bereits in Game Maker Studio auf Box2D gestoßen war, war dies mein erstes Mal, 
die Library ohne zusätzliche Abstraktion zu verwenden. 
Die Library war intuitiv und ich konnte mich schnell an sie anpassen.

#### Prozedural Generation
Die prozedurale Generierung war ein kleinerer Aspekt des Projekts, 
aber ich habe viel daraus gelernt. Mithilfe der [FastNoise2](https://github.com/Auburn/FastNoise2)-Library erzeugte ich Noise-Map, 
die entscheidend für die Erstellung von Terrain, 
Höhlen und anderen Elementen wie Erzen und Wasser waren. 
Zudem entwickelte ich einen rekursiven Ansatz für die Generierung von Bäumen.

### Dinge, die besser sein könnten

#### Shader Code
Da GLSL eine relativ simple Sprache ohne große Unterstützung für Abstraktion ist, ist der Shader-Code unordentlicher, als ich es mir wünschen würde.
Ich möchte einige häufig wiederkehrende Abschnitte abstrahieren, wofür wahrscheinlich ein benutzerdefinierter Parser notwendig wäre, 
den ich aufgrund von Zeitmangel nicht umsetzen konnte.

#### Rigid Body Pixel Simulation
Obwohl die Simulation starrer Körper aus Pixeln funktioniert, gibt es noch Probleme, 
wie z.B. Löcher in Formen bei der Rotation und gelegentliche Freezes in bestimmten Edge-Cases.
Eine mögliche Lösung wäre, die CPU-basierte Physik-Engine komplett zu entfernen und sämtliche Physik auf der GPU zu simulieren.

## Resultate

### Source Code
Das Projekt ist vollständig Open Source und verfügbar hier: [https://github.com/xWinuX/REA](https://github.com/xWinuX/REA)

### Grade
Die Endnote war eine First (University of Hertfordshire Notensystem), was auf der Schweizer Notenskala einer 5.5 entspricht.
