# Pyramidis
Pyramidis is my first attempt at a multiplayer game.
The project was for studies where the goal was to make a (online) multiplayer game.
I made everything in the game except the music that plays during most of the gameplay, which was made by a friend of mine.
A full playthrough can be seen in the video below, or you can play it yourself with the link at the bottom of the page.

::youtube-embed{videoId="Lk0QINWfVIA"}
::

## Features
In Pyramidis two players fall into a seemingly ancient pyramid and must find their way out.
The players can choose their character at the beginning of the game, each character can only be used once.

::auto-video{src="../media/character-select.mp4"}
::

The game features a couple of puzzles where the players need to work together to solve them.

::auto-video{src="../media/puzzles.mp4"}
::

The game also features a lot of dialogues. The dialogue is either synced up so both players need to confirm they read it or can be separate so only one player sees it 
(this is mostly reserved for thoughts of the character)

::auto-video{src="../media/dialogue.mp4"}
::

## Reflection

### What I learned

#### Multiplayer in Unity with Mirror
This was my first time really doing multiplayer in Unity.
I've used [Photon](https://www.photonengine.com/pun) before for testing some stuff, 
but settled on [Mirror](https://assetstore.unity.com/packages/tools/network/mirror-129321?srsltid=AfmBOorSfg6Bf6syfYja8Efy9XC5npHNYzECelGmss-e2zicTpgY5Rh4) 
as the network Library for this project _(Note: this game was made in 2022 before Unity's new networking solution "Netcode for GameObjects/Entites" was production ready)_.
Multiplayer certainly required a lot more testing than singleplayer and also a lot of error handling like for example what happens when someone disconnects.

#### Character characterization
Both the characters you can select from have their own distinct personalities which I developed while making the game.
It's not the first time I've made characters, but it's the first time you can actually see them in action.

### Things that could be better

#### Polishing
The game isn't as polished as I would have liked. 
There are a number of bugs, graphical issues, some missing portraits for the dialogue, and some general lack of content.
The causes for this are described below.

#### Steamworks
In the first prototype of the game I integrated the SteamWorks API, but then later scrapped it because it was way too much of a hassle to test the game.
This obviously cost me a lot of time that could have been spent on polishing the game.

#### Underestimating how long certain things take in multiplayer
Since I've never made a multiplayer game, it was challenging to estimate how long certain things would take.
Because of that I've had to scrap multiple puzzles and also scale back the entire game itself. 

## Results

### Download
The game can be downloaded here: [https://winux.itch.io/pyramidis](https://winux.itch.io/pyramidis)

### Grade
The final grade was a 3 (University of Middlesex grading scale), which is equivalent to a 5.6 on the Swiss grading scale.


