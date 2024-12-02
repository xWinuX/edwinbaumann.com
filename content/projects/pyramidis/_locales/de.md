# Pyramidis
Pyramidis ist mein erster Versuch eines Multiplayer-Spiels.
Das Projekt diente Studien, deren Ziel die Entwicklung eines (Online-)Mehrspieler-Spiels war.
Ich habe alles im Spiel selbst gemacht, außer der Musik, die während des größten Teils des Gameplays läuft und von einem Freund von mir stammt.
Ein vollständiger Playthrough kann im Video unterhalb angesehen werden, oder man kann das Spiel selbst spielen mit dem Link am Ende dieser Seite.

::youtube-embed{videoId="Lk0QINWfVIA"}
::

## Features
In Pyramidis stürzen zwei Spieler in eine scheinbar uralte Pyramide und müssen ihren Weg hinausfinden.
Die Spieler können zu Beginn des Spiels ihren Charakter wählen, jeder Charakter kann nur einmal verwendet werden.

::auto-video{src="../media/character-select.mp4"}
::

Das Spiel enthält einige Puzzles, bei denen die Spieler zusammenarbeiten müssen, um sie zu lösen.

::auto-video{src="../media/puzzles.mp4"}
::

Das Spiel enthält außerdem viele Dialoge. 
Der Dialog wird entweder synchronisiert, sodass beide Spieler bestätigen müssen, ob sie ihn gelesen haben, oder er kann separat sein, sodass nur ein Spieler ihn sieht (dies ist meist für die Gedanken der Spielfigur reserviert).

::auto-video{src="../media/dialogue.mp4"}
::
## Reflexion

### Was ich gelernt habe

#### Multiplayer in Unity mit Mirror
Das war mein erstes Mal, Multiplayer in Unity wirklich zu nutzen.
Ich habe [Photon](https://www.photonengine.com/pun) bereits zum Testen einiger Dinge verwendet, 
habe mich aber für [Mirror](https://assetstore.unity.com/packages/tools/network/mirror-129321?srsltid=AfmBOorSfg6Bf6syfYja8Efy9XC5npHNYzECelGmss-e2zicTpgY5Rh4) als Netzwerkbibliothek für 
dieses Projekt entschieden _(Anmerkung: Dieses Spiel wurde 2022 entwickelt, bevor Unitys neue Netzwerk-Lösung „Netcode for GameObjects/Entites“ produktionsreif war)_.
Der Multiplayer-Modus erfordert natürlich deutlich mehr Tests als der Einzelspielermodus und auch viel Fehlervorbeugung, beispielsweise was passiert, wenn ein Spieler disconnected.

#### Charakterisierung der Charaktere
Beide wählbaren Charaktere verfügen über eine eigene Persönlichkeit, die ich während der Entwicklung des Spiels geschaffen habe.
Es ist nicht das erste Mal, dass ich Figuren erschaffen habe, aber es ist das erste Mal, dass man sie tatsächlich in Aktion sehen kann.

### Was besser sein könnte

#### Polishing
Das Spiel ist nicht so polished, wie ich es gerne gehabt hätte.
Es gibt einige Bugs, grafische Probleme, fehlende Porträts für den Dialog und einen allgemeinen Mangel an Inhalten.
Die Ursachen dafür werden unterhalb beschrieben.

#### Steamworks
Im ersten Prototyp des Spiels habe ich die SteamWorks API integriert, sie aber später wieder entfernt, da das Testen des Spiels viel zu umständlich wurde.
Das hat mich offensichtlich viel Zeit gekostet, die hätte für das polishing des Spiels verwenden können.

#### Die Dauer bestimmter Dinge im Multiplayer-Modus zu unterschätzen
Da ich noch nie ein Multiplayer-Spiel entwickelt habe, war es schwierig abzuschätzen, wie lange bestimmte Dinge dauern würden.
Deshalb musste ich mehrere Puzzles streichen und auch das gesamte Spiel stark verkleinern.

## Resultate

### Download
Das Spiel kann hier: [https://winux.itch.io/pyramidis](https://winux.itch.io/pyramidis) heruntergeladen werden.

### Note
Die Endnote war eine 3 (University of Middlesex Notensystem), was auf der Schweizer Notenskala einer 5.6 entspricht.
