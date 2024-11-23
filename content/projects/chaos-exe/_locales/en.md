# Chaos.exe
Chaos.exe was a game made for the 37th GM48, the theme of the jam was "Falling Apart".
I did all the programming, a friend of mine did all the art and we made the audio together.
A full playthrough can be seen in the video below, or you can play it yourself with the link at the bottom of the page.

::youtube-embed{videoId="lzsH1fZulz0"}
::

## Features
In Chaos.exe you can move, jump, and interact with various things.
You move around a small world and experience events that will always cause your character to die.
Each time you die, the world gets more and more corrupted, causing random events such as random voices or glitchy animations.

::auto-video{src="../media/effects.mp4"}
::

The player will receive a key after a certain number of events, with that he can finish his adventure.
There are different ending depending on the amount of events triggered.

Mechanically, the game is pretty simple, the complex stuff is the whole event system and the persistence of the world state.

## Reflection

### What I learned

#### Shader Effects
The game uses various shaders to achieve its glitchy effects.
I've used shaders a couple of times before, but it's the first time I'm really focusing on them.
I think that Programming shaders is quite a bit more challenging than writing normal gameplay code, since you often don't have instant feedback when something goes wrong.
But I'm quite proud of the final effects in the game.

#### Level persistence
The world changes when you die, but some things stay the same or are affected by your choices.
The world is basically split into multiple layers that each activate and deactivate certain objects depending on the events the player triggered.
For example, the cave on the left side gets blocked by chairs if the player already experienced the event, so he can't trap himself there again.

### Things that could be better

#### Explanation of the event mechanic
While it is intended for players to wander around a bit aimlessly at the beginning, some players stayed confused the whole game and didn't quite know what to do.
We tried to fix this with the altars besides the house, but it still confused some people.
Next time we should maybe add a note in the description or explain it better ingame.

## Results

### Download
The original submission can be viewed here: [https://gm48.net/game-jams/falling-apart/games/chaosexe](https://gm48.net/game-jams/falling-apart/games/chaosexe) \
It's also available on itch.io: [https://woxelgames.itch.io/chaosexe](https://woxelgames.itch.io/chaosexe)

### Ranking
The project was ranked 15 out of 55, more detailed information on the ranking can be found on the website of the original submission above.

