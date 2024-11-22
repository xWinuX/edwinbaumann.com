# Guschti
Guschti was a game made for the 33th GM48, the theme of the jam was "Collect".
I did all the programming and audio, and a friend of mine did all the art.
A full playthrough can be seen in the video below, or you can play it yourself with the link at the bottom of the page.

::youtube-embed{videoId="FlH41N7E0i4"}
::

## Fun Fact
Guschti (pronounced goo sh tea) is a Swiss German word for a young female cow

## Features
In Guschti you're in dept. You have to herd animals into stables and sell their produce to make money.

You can find three types of animals outside your farm.
- Cows
- Fish with legs
- Pigs

They can be herded by holding an item they like for example cows like apples, so holding one will make them follow you.
These items can also be found around the world and sold, but they will not respawn.
Once animals are inside a stable, they will start producing.

::auto-video{src="../media/herding.mp4"}
::

You can also upgrade your stables in various ways, these include:
- Making the stable bigger so more animals can be inside them
- Making the rate animals produce higher
- Upgrading the collection system
  - Level 0 doesn’t collect at all, all produce will be inside the stable.
  - Level 1 will put a machine infront of the stable that puts the produce onto the ground.
  - Level 2 will make the machine store the produce that can then be outputed by interacting with it.
  - Level 3 will automatically sell all produce and display the average money made.

::auto-video{src="../media/upgrading.mp4"}
::

## Reflection

### What I learned

#### Inventory management
This was the first time I made an inventory system in this style. 
You can directly take out stuff and put it on the ground. 
Items can stack and stacks can be split. 
Space is limited and holding items has different effects.
It was an interesting challenge and turned out really well.

#### Stable systems
The stable systems are something I really haven't done before.
Checking what kind and how many animals are inside the stables and then generating items based on upgrade levels was quite a fun challenge to solve.

### Things that could be better

#### Too big of a game concept
The game concept was way too big to be done in 48 hours, so we had to cut a lot of the stuff and rush a lot of other stuff.
The entire games world was created in the last few hours and led to a lot of issues that are described below.

#### Stable bug
The game will crash if all animals are removed from a stable, because of an oversight in the game code.
It's really unfortunate that this happened, but it's a reminder to always test as much as possible

#### Collisions issues
The bottom right stable is placed right next to a wall, which causes the collector to put items into a wall, making them unobtainable until the collector is fully upgraded.
It is also quite easy for animals to get stuck in the level geometry so they can no longer be herded.
Most of these issues are caused by not allocating enough time for testing and also because this type of game is really hard to test with the time limit of the game jam.

## Results

### Download
The original submission can be viewed here: [https://gm48.net/game-jams/collect/games/guschti](https://gm48.net/game-jams/collect/games/guschti) \
It's also available on itch.io: [https://woxelgames.itch.io/guschti](https://woxelgames.itch.io/guschti)

### Ranking
The project was ranked 30 out of 68, more detailed information on the ranking can be found on the website of the original submission above.

