# Lux Machina
Lux Machina wurde für den 28. GM48 entwickelt, das Thema des Jams war "Companion (Begleiter)".
Ich habe das gesamte Spiel programmiert und die Music und Soundeffekte erstellt und ein Kollege von mir hat alle Grafiken und das Level Design gemacht.
Ein vollständiger Playthrough kann im Video unterhalb angesehen werden, oder man kann das Spiel selbst spielen mit dem Link am Ende dieser Seite.

::youtube-embed{videoId="H33Vi-p_dQA"}
::

## Features
In Lux Machina wächst du in einer komischen Einrichtung auf und merkst, dass du keine Arme mehr hast.
Ausserdem hörst du eine ominöse Stimme, die dir Instruktionen gibt.
Man wird durch mehrere Räume voller Puzzleelemente gehen, manche kann man selbst aktivieren wie z.B. Druckplatten

::auto-video{src="../media/pressure-plate.mp4"}
::

Für andere hingegen benötigt man die Hilfe von dem fliegenden Roboter der einem folgt.

::auto-video{src="../media/buddy.mp4"}
::

Der Roboter kann Orte erreichen, die der Spieler selbst nicht kann, zudem kann er Laser umleiten, um damit andere Elemente zu aktivieren

::auto-video{src="../media/lasers.mp4"}
::

Das Spiel beinhaltet die folgenden Puzzleelemente:
- Druckplatten, die aktiviert bleiben, sobald sie einmal aktiviert wurden
- Druckplatten, die nur aktiv sind, wenn man darauf stehen bleibt.
- Knöpfe, die nur die Roboter bedienen können
- Lasers
- Türen, die durch andere Elemente geöffnet werden können
- Zwei Roboter, die horizontal und vertikal Laser umleiten

## Reflexion

### Was ich gelernt habe

#### Laser System
Ich habe gelernt, wie ich funktionale Laser erstellen kann, die blockiert und in verschiedene Winkel umgeleitet werden können.

#### Mehrere spielbare Charaktere
Dies war auch das erste Mal, dass ich jemals ein Spiel mit mehr als einem steuerbaren Charakter gemacht habe.
Das Entwerfen eines Systems, das zwischen ihnen wechseln kann, war recht interessant.

### Was besser sein könnte

#### Mehr Content
Das Spiel ist ziemlich kurz, und ich hätte gerne noch ein paar weitere Rätsel hinzugefügt.
Es gibt einige Überreste eines dritten Roboters, der Laser diagonal umleiten würde, die für einige coole Rätsel verwendet werden könnten.

#### Controls sind etwas unintuitiv
Die Steuerungen zum Wechseln zwischen dem Spieler und den Robotern in der Originalversion waren für die meisten nicht sehr intuitiv.
Wenn man an einem Spiel arbeitet und es konstant testet, kann man schnell solche Probleme übersehen, da es für einen selbst ja funktioniert.
Deswegen ist es immer eine gute Idee Feedback von einer Person zu erhalten, die nicht am Spiel arbeitet.

#### Debug Tasten drin gelassen
Während der Entwicklung habe ich die Pfeiltasten links und rechts verwendet, um schnell zwischen Level zu wechseln und sie effizienter zu testen.
Dies ist eine Debug-Only Funktion und sollte nicht im endgültigen Release enthalten sein, aber sie haben sich dennoch eingeschlichen.
Es hat bei ein paar Spielern zu Verwirrung gesorgt, wenn sie versucht sich mit den Pfeiltasten, anstatt WASD zu bewegen.
Beim nächsten Mal sollte ich Debug-Flags nutzen, um solche Funktionen automatisch aus dem Release Build zu entfernen.

## Resultate

### Download
Der Originalupload kann hier: [https://gm48.net/game-jams/countdown/games/lux-machina](https://gm48.net/game-jams/countdown/games/lux-machina) angesehen werden. \
Ausserdem ist es auf itch.io verfügbar: [https://woxelgames.itch.io/lux-machina](https://woxelgames.itch.io/lux-machina)

### Ranking
Das Projekt wurde auf Platz 10 von 53 gerankt, weitere Details zu dem Ranking kann auf der Webseite des Orignaluploads gefunden werden.
