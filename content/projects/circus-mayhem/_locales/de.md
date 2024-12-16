# Circus Mayhem
Circus Mayhem wurde für den GMTK Game Jam 2020 entwickelt, das Thema des Jams war "Out of Control (Ausser Kontrolle)".
Ich habe das gesamte Spiel programmiert und die Music und Soundeffekte erstellt und ein Kollege von mir hat alle Grafiken gemacht.
Ein Playthrough kann im Video unterhalb angesehen werden, oder man kann das Spiel selbst spielen mit dem Link am Ende dieser Seite.

::youtube-embed{videoId="WVrcoyM7tNM"}
::

## Features
In Circus Mayhem besiegt man eine ständig wachsende Anzahl von Clowns und sammelt deren Loot ein.  
Dieser Loot dient dazu, Helfer zu rekrutieren, die mit einem kämpfen, oder die Clown-Statue zu verbessern, um weitere Helfer freizuschalten. 
Das Ziel des Spiels ist es, die Clown-Statue vollständig wiederaufzubauen, daher muss man entscheiden, wann man Helfer einstellt und wann man die Statue verbessert.

::auto-video{src="../media/gameplay.mp4"}
::

Das Gimmick von Circus Mayhem ist, dass jeder Gegner seine Waffe fallen lässt, sobald er besiegt ist.
Waffen werden automatisch aufgehoben, wenn man sie berührt, deshalb wechselt man also ständig die Waffe, wenn man nicht aufpasst.

::auto-video{src="../media/weapon-chaos.mp4"}
::

Die Clowns spawnen in Wellen, die bis zu einem bestimmten Punkt einzigartig sind. 
Danach geht das Spiel in einen endlosen Modus über, in dem alle Wellen gleich sind.

::auto-video{src="../media/waves.mp4"}
::

## Reflexion

### Was ich gelernt habe

#### Modulare Charaktere
Der Spieler, die Helfer und die Gegner sind alle modular programmiert.  
Zum Beispiel ist der einzige Unterschied zwischen Gegnern und dem Spieler, dass der Spieler durch Inputs gesteuert wird und nicht durch KI-Logik.
Sie alle erleiden Knockback durch den Einsatz von Waffen, sie können Med-Packs und Waffen aufheben usw...

### Was besser sein könnte

#### Viel zu schwer
Das Spiel ist viel zu schwer, ich konnte es selbst beim Replay für die Videoaufnahmen nicht schaffen.
Das Spiel selbst ist wirklich schwer zu testen, da jeder Spieldurchgang anders und sehr lang sein kann,
aber einige Gegner haben definitiv zu viel Leben und verursachen zu viel Schaden.

#### Der Spieler sollte in der Lage sein, Wellen zu überspringen.
Nach jeder Welle muss der Spieler 30 Sekunden warten, bevor die nächste beginnt.
Am Anfang des Spiels ist es ziemlich langweilig, 30 Sekunden warten zu müssen, da man in dieser Zeit wenig tun kann.
Am Ende sind 30 Sekunden zu wenig, da man viel Loot einsammeln muss, der über die gesamte Map verteilt liegt, sodass ein Grossteil einfach despawnt.

## Resultate

### Download
Der Originalupload kann hier: [https://itch.io/jam/gmtk-2020/rate/693799](https://itch.io/jam/gmtk-2020/rate/693799) angesehen werden. \
Hier ist der direkt itch.io link: [https://woxelgames.itch.io/circus-mayhem](https://woxelgames.itch.io/circus-mayhem)
