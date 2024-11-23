# ASYNC
ASYNC was a game made for the 35th GM48, the theme of the jam was "Two Sides".
This was the first game jam I did completely alone, so I made everything.
A full playthrough can be seen in the video below, or you can play it yourself with the link at the bottom of the page.

::youtube-embed{videoId="ehz_W81foTA"}
::

## Features
In ASYNC you control two characters on opposite sides of your screen.
At first, they’re synced together, so they move together and when one is blocked the other one also can't move.

::auto-video{src="../media/synced-block.mp4"}
::

But after advancing a bit, you soon find a button that can toggle the sync state of the world.
With this button it is possible to unsync them so they can move independently of one another.

::auto-video{src="../media/independent-move.mp4"}
::

You can now solve puzzles by strategically moving and syncing different parts of the environment together.
For example, one character can move a box out the way of the other because the boxes are synced together.

::auto-video{src="../media/sync-puzzle.mp4"}
::

## Reflection

### What I learned

#### Grid movement
This was my first time coding movement that was strictly limited to a grid.
The movement itself was simple to implement, the complexity came from the way it interacted with the sync-mechanic.
The grid has multiple layers, so a button and a box can exist at the same place, so each check also had to take that into account.

#### Syncing
The syncing of the grid entities was definitely the hardest part to implement.
It required a lot of checks to make sure that the entities couldn't move into each other or go outside the boundaries set by the level.

### Things that could be better

#### Visualization of the syncing and controlling character
There should have been a better visual representation of what character is currently being controlled.
Sometimes it's also kind of hard to tell which entities are overlapping each other on both sides, 
so a system where it shows the ghosts of the other side would probably help.
Some people were also a bit confused with the whole mechanic itself, so a text tutorial might have helped instead of trying to teach via level design.

## Results

### Download
The original submission can be viewed here: [https://gm48.net/game-jams/two-sides/games/async](https://gm48.net/game-jams/two-sides/games/async) \
It's also available on itch.io: [https://woxelgames.itch.io/async](https://woxelgames.itch.io/async)

### Ranking
The project was ranked 11 out of 65, more detailed information on the ranking can be found on the website of the original submission above.

