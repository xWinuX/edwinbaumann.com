# Chaos.exe
Chaos.exe wurde für den 37. GM48 entwickelt, das Thema des Jams war "Falling Apart (Auseinanderfallen)".
Ich habe das gesamte Spiel programmiert, ein Kollege von mir hat alle Grafiken gemacht und zusammen haben wir die Music und SFX gemacht.
Ein vollständiger Playthrough kann im Video unterhalb angesehen werden, oder man kann das Spiel selbst spielen mit dem Link am Ende dieser Seite.

::youtube-embed{videoId="_G9z0w74I8w"}
::

## Features
In Chaos.exe kann man bewegen, springen und mit einigen Dingen interagieren.
Man bewegt sich in einer kleinen Welt und erleben Events, die immer dazu führen werden, dass sein Charakter stirbt.
Die Welt wird immer korrupter, je mehr man stirbt, was zufällige Events wie komische Stimmen und Korrupte Animationen zur Folge hat.

::auto-video{src="../media/effects.mp4"}
::

Ab einer gewissen Anzahl Event erhält er Spieler einen Schlüssel, mit dem er das Spiel abschliessen kann.
Je nachdem wie viele Events der Spieler erlebt hat, gibt es verschiedene Endings.
Das Spiel ist mechanisch ziemlich einfach, die komplexen Dinge sind das gesamte Event-System und die Persistenz des Weltzustands.

## Reflexion

### Was ich gelernt habe

#### Shader Effekte
Das Spiel verwendet verschiedene Shader, um seine Korruptionseffekte zu erzielen.
Ich habe Shader schon ein paar Mal verwendet, aber es ist das erste Mal, dass ich mich wirklich darauf fokusiere.
Ich denke, dass das Programmieren von Shadern ziemlich viel anspruchsvoller ist als das Schreiben von normalem Gameplay-Code, da man oft kein sofortiges Feedback bekommt, wenn etwas nicht funktioniert.
Aber ich bin ziemlich stolz auf die finalen Effekte im Spiel.

#### Level Persistenz
Die Welt verändert sich, wenn man stirbt, aber einige Dinge bleiben gleich oder werden von seienn Entscheidungen beeinflusst.
Die Welt ist im Grunde in mehrere Layer unterteilt, die jeweils bestimmte Objekte aktivieren und deaktivieren, abhängig von den Events, die der Spieler auslöst.
Zum Beispiel wird die Höhle auf der linken Seite von Stühlen blockiert, wenn der Spieler das Ereignis bereits erlebt hat, sodass er sich dort nicht erneut einsperren kann.

### Was besser sein könnte

#### Erklärung der Event Machanic
Während es für Spieler am Anfang beabsichtigt ist, ein wenig ziellos umherzuwandern, blieben einige Spieler das ganze Spiel über verwirrt und wussten nicht so recht, was sie tun sollten.
Wir haben versucht, dies mit den Altären neben dem Haus zu beheben, aber es hat immer noch einige Leute verwirrt.
Das nächste Mal sollten wir vielleicht eine Notiz in der Beschreibung hinzufügen oder es im Spiel besser erklären.

## Resultate

### Download
Der Originalupload kann hier: [https://gm48.net/game-jams/falling-apart/games/chaosexe](https://gm48.net/game-jams/falling-apart/games/chaosexe) angesehen werden. \
Ausserdem ist es auf itch.io verfügbar: [https://woxelgames.itch.io/chaosexe](https://woxelgames.itch.io/chaosexe)

### Ranking
Das Projekt wurde auf Platz 10 von 53 gerankt, weitere Details zu dem Ranking kann auf der Webseite des Orignaluploads gefunden werden.
