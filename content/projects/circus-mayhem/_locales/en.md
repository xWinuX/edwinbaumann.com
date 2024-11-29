# Circus Mayhem
Circus Mayhem was a game made for the GMTK Game Jam 2020 , the theme of the jam was "Out of Control".
I participated alone, so everything was made by me.
A playthrough can be seen in the video below, or you can play it yourself with the link at the bottom of the page.

::youtube-embed{videoId="WVrcoyM7tNM"}
::

## Features
In Circus Mayhem you defeat an ever-increasing number of clowns and collect their loot.
Use this loot to recruit helpers who will fight with you or use it to upgrade the clown statue to unlock more helpers.
The goal of the game is to rebuild the clown statue completely, so you have to decide when to hire helpers and when to upgrade the statue.

::auto-video{src="../media/gameplay.mp4"}
::

The gimmick of circus mayhem is that each enemy drops their weapon when they’re defeated, and you automatically pick up weapons when you touch them.
So you will constantly be switching between weapons if you're not careful.

::auto-video{src="../media/weapon-chaos.mp4"}
::

The clowns will spawn in waves that are unique until a certain point, after that point the game will enter an endless mode where all the waves are the same.

::auto-video{src="../media/waves.mp4"}
::

## Reflection

### What I learned

#### Modular characters
The player, helpers, and enemies are all programmed in a modular fashion.
For example, the only difference between enemies and the player is that the player is controlled by input rather than AI logic.
They each experience knock-back effects from using weapons, they can pickup med-packs and weapons etc...

### Things that could be better

#### Way too hard
The game is way too hard, I couldn't even beat it myself on the replay I did to record the videos.
The game itself is really hard to test since every playthrough can be different and is very long, 
but some enemies definitely have too much health and deal too much damage.

#### The player should be able to skip waves
After each wave the player must wait 30 seconds before the next one starts.
At the beginning of the game, it's pretty annoying to have to wait for 30 seconds since you can do little in that time.
At the end 30 seconds is too little since you need to collect a lot of loot that lies around the entire map, so a lot of it just despawns.

## Results

### Download
The original submission can be viewed here: [https://itch.io/jam/gmtk-2020/rate/693799](https://itch.io/jam/gmtk-2020/rate/693799) \
Here's the direct itch.io link: [https://woxelgames.itch.io/circus-mayhem](https://woxelgames.itch.io/circus-mayhem)

