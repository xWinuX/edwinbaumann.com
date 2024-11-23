# ASYNC
ASYNC wurde für den 35. GM48 entwickelt, das Thema des Jams war "Two Sides (Zwei Seiten)".
Dies war der erste Game Jam, den ich komplett alleine gemacht habe, also habe ich alles erstellt.
Ein vollständiger Playthrough kann im Video unterhalb angesehen werden, oder man kann das Spiel selbst spielen mit dem Link am Ende dieser Seite.

::youtube-embed{videoId="ehz_W81foTA"}
::

## Features
Im ASYNC kontrollierst du zwei Charaktere auf gegenüberliegenden Seiten deines Bildschirms.
Zu Beginn sind sie synchronisiert, sodass sie sich gemeinsam bewegen und wenn einer blockiert ist, kann der andere auch nicht bewegen.

::auto-video{src="../media/synced-block.mp4"}
::

Aber nachdem man ein bisschen weiter spielt, findet man einen Knopf, der den Synchronisierungszustand der Welt umschalten kann.
Mit diesem Knopf kann man die Charaktere voneinander trennen, damit sie unabhängig voneinander bewegt werden können.

::auto-video{src="../media/independent-move.mp4"}
::

Man kann jetzt Rätsel lösen, indem man strategisch verschiedene Teile der Umgebung bewegt und synchronisiert.
Beispielsweise kann ein Charakter eine Box aus dem Weg des anderen schieben, da die Kisten zusammen synchronisiert sind.

::auto-video{src="../media/sync-puzzle.mp4"}
::

## Reflexion

### Was ich gelernt habe

#### Grid movement
Dies war das erste Mal, dass ich Bewegungen programmiert habe, die streng auf ein Grid beschränkt waren.
Die Bewegung selbst war einfach umzusetzen, die Komplexität ergab sich aus der Interaktion mit der Sync-Mechanik.
Das Grid hat mehrere Ebenen, sodass ein Knopf und eine Box am selben Ort existieren können, und jeder Check muss das berücksichtigen.

#### Syncing
Die Synchronisierung der Grid Entities war definitiv der schwierigste Teil bei der Implementierung. 
Es erforderte viele Checks, um sicherzustellen, dass die Entities nicht ineinander bewegt werden konnten oder die Grenzen des Levels überschreiten konnten.

### Was besser sein könnte

#### Visualization of the syncing and controlling character
Es hätte eine bessere visuelle Darstellung davon geben sollen, welcher character gerade gesteuert wird. 
Manchmal ist es auch etwas schwierig zu erkennen, welche Entities sich auf beiden Seiten überschneiden. 
Dazu würde ein Ghost-System, das die Entities der anderen Seite auf der jetzigen Seite leicht transparent anzeigt, wahrscheinlich helfen. 
Einige Leute waren auch ein wenig verwirrt von der Sync-Mechanik an sich, daher hätte ein Text-Tutorial wahrscheinlich geholfen, anstatt durch das Leveldesign es versuchen zu erklären.

## Resultate

### Download
Der Originalupload kann hier: [https://gm48.net/game-jams/two-sides/games/async](https://gm48.net/game-jams/two-sides/games/async) angesehen werden. \
Ausserdem ist es auf itch.io verfügbar: [https://woxelgames.itch.io/async](https://woxelgames.itch.io/async)

### Ranking
Das Projekt wurde auf Platz 11 von 65 gerankt, weitere Details zu dem Ranking kann auf der Webseite des Orignaluploads gefunden werden.
