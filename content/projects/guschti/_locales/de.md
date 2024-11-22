# Guschti
Guschti wurde für den 33. GM48 entwickelt, das Thema des Jams war "Collect (Sammeln)".
Ich habe das gesamte Spiel programmiert und die Music und Soundeffekte erstellt und ein Kollege von mir hat alle Grafiken gemacht.
Ein vollständiger Playthrough kann im Video unterhalb angesehen werden, oder man kann das Spiel selbst spielen mit dem Link am Ende dieser Seite.

::youtube-embed{videoId="FlH41N7E0i4"}
::

## Fun Fact
Guschti ist ein Schweizerdeutsches Wort für eine junge weibliche Kuh.

## Features
In Guschti bist du Verschulded. Du musst Tiere in Ställe treiben und ihre Produkte verkaufen, um Geld zu verdienen.

Es können drei Arten von Tieren gefunden werden.
- Kühe
- Fische mit Beinen
- Schweine

Man kann Tiere hüten, indem man einen Gegenstand in die Hand nimmt, den sie mögen.
Zum Beispiel mögen Kühe Äpfel, also wird das Halten eines Apfels sie dazu bringen, einem zu folgen. 
Diese Gegenstände können überall gefunden und verkauft werden, aber sie werden nicht wieder respawnen.
Sobald Tiere in einem Stall sind, beginnen sie mit der Produktion.

::auto-video{src="../media/herding.mp4"}
::

Man kann die Ställe auch in verschiedenen Bereichen upgraden, dazu gehören:
- Die Ställe vergrößern, damit mehr Tiere Platz haben.
- Erhöhen der Produktionsrate.
- Verbesserung des Sammelsystems
    - Level 0 sammelt überhaupt nicht, alle Produkte werden im Stall sein.
    - Level 1 wird eine Maschine vor den Stall gestellt, welche die Produkte auf den Boden legt.
    - Stufe 2 lagert die Maschine alle erzeugten Produkte, wenn man dann mit der Maschine interagiert, gibt sie alle Produkte auf einmal aus.
    - Stufe 3 werden automatisch alle Produkte verkauft und es wird auf der Maschine der durchschnittliche Gewinn angezeigt.

::auto-video{src="../media/upgrading.mp4"}
::

## Reflexion

### Was ich gelernt habe

#### Inventar management
Dies war das erste Mal, dass ich ein Inventarsystem in diesem Stil erstellt habe.
Man kann Gegenstände direkt herausnehmen und auf den Boden legen.
Gegenstände können gestapelt werden und Stapel können geteilt werden.
Der Platz ist begrenzt und das Halten von Gegenständen hat verschiedene Auswirkungen.
Es war eine interessante Herausforderung und hat sich wirklich gut entwickelt.

#### Stallsystem
Die stabilen Systeme sind etwas, was ich wirklich noch nicht gemacht habe. 
Es war eine ziemlich unterhaltsame Herausforderung, zu überprüfen, 
welche Art und wie viele Tiere sich in den Ställen befinden, und dann Produkte basierend auf den Upgrade-Leveln zu generieren.

### Was besser sein könnte

#### Zu grosses Spielkonzept
Das Spielkonzept war viel zu umfangreich, um es in 48 Stunden umzusetzen, daher mussten wir viele Dinge streichen und vieles Andere rushen.
Die gesamte Spielwelt wurde in den letzten Stunden erstellt und führte zu einer Vielzahl von Problemen, die unten beschrieben sind.

#### Stall Bug
Das Spiel wird abstürzen, wenn alle Tiere aus einem Stall entfernt werden, aufgrund eines Fehlers im Spielcode.
Es ist wirklich schade, dass dies passiert ist, aber es erinnert daran, immer so viel wie möglich zu testen.

#### Kollisionsprobleme
Der untere rechte Stall ist direkt neben einer Wand platziert, was bewirkt, dass der Sammler Gegenstände in die Wand legt, wodurch sie unzugänglich werden, bis der Sammler vollständig geupgraded ist.
Es ist auch ziemlich leicht für Tiere, in der Level-Geometrie stecken zu bleiben, sodass sie nicht mehr gehütet werden können.
Die meisten dieser Probleme entstehen, weil nicht genügend Zeit für Tests eingeplant wurde und auch, weil diese Art von Spiel wirklich schwer mit der zeitlichen Begrenzung des Game Jams zu testen ist.

## Resultate

### Download
Der Originalupload kann hier: [https://gm48.net/game-jams/collect/games/guschti](https://gm48.net/game-jams/collect/games/guschti)  angesehen werden. \
Ausserdem ist es auf itch.io verfügbar: [https://woxelgames.itch.io/guschti](https://woxelgames.itch.io/guschti)

### Ranking
Das Projekt wurde auf Platz 10 von 53 gerankt, weitere Details zu dem Ranking kann auf der Webseite des Orignaluploads gefunden werden.
