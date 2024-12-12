# Monster Fight Simulator
Monster Fight Simulator was a small project I needed to do for my studies. 
It involved making a console application where the user could create two different monsters of different races, adjust their stats, and then let them fight.
Since I've had some extra time and wanted to challenge myself, I made a small engine around it that runs entirely inside a Windows console window.
The game itself can be viewed below:

::video-player{src="../media/gameplay.mp4"}
::

## Features
The game itself is basic. The user can choose between three races and then give each monster a name and adjust its stats.
Each race has different ranges in each stat, so for example, some may have a higher maximum life than others. \
\
The interesting part about the project itself is the console engine it runs in.

### Rendering
Since the entire engine runs in a console window, the entire rendering is basically just figuring out where to put certain character in the console.
There is a list of strings that represents the current frame, where the length of each string is the width of the window and the number of strings in the list is the height.
Then for the actual drawing of objects, there are sprites that are also just lists of strings and can have multiple frames for animations.

```csharp
new SpriteData(1f, OriginHelper.Preset.MiddleCenter, new[]
{
    new[]
    {
        " o ",
        "/|\\",
        "/ \\ ",
    },
    new[]
    {
        " o ",
        "|||",
        "/ \\ ",
    }
})
```

On each frame the engine will clear the current list of strings then render each sprite onto it.
Sprites can have different depths, so they can be above other sprites or below them.
By default, sprites will always draw over the entire area they cover even when the sprite contains white spaces.
This can be changed by using an "&" character which will get converted to real transparency so sprites can be seen through other sprites. \
\
It is also possible to render strings directly into the current frame, without using a sprite. 
This makes rendering dynamic data a lot easier.
```csharp
RenderStringAt(Transform.Position + Vector2.Down * 10f, new[]
{
    "Health:  " + _races[_selector.Position.Y].RangeProfile.HealthRange,
    "Attack:  " + _races[_selector.Position.Y].RangeProfile.AttackRange,
    "Defense  " + _races[_selector.Position.Y].RangeProfile.DefenseRange,
    "Speed:   " + _races[_selector.Position.Y].RangeProfile.SpeedRange
}, OriginHelper.Preset.MiddleCenter);
```

::auto-video{src="../media/rendering.mp4"}
::

### Game Object Management
There are game objects that have some predefined properties like a transform, then there are two child classes that can be inherited from that are called Actor and SpriteObject.
Actors should mostly be used for interactive game objects in the game, and SpriteObjects should only be used for visual effects and UI since they require fewer resources than Actors.
Each game object has virtual methods like Start and Update that get called during the game loop.

```csharp
public class ActorPlayer : Actor
{
    private Vector2 _velocity = Vector2.Zero;

    private readonly Range _maxSpeed = new Range(-3.0f, 3.0f);

    private const float Friction = 10.0f;

    private readonly Sprite _idleSprite = SpriteDatabase.SprPlayerIdle;
    private readonly Sprite _walkSprite = SpriteDatabase.SprPlayerWalk;

    public ActorPlayer()
    {
        Sprite = _idleSprite;
    }

    public override void Update()
    {
        base.Update();

        // Acceleration
        _velocity += new Vector2(
            Convert.ToInt32(InputDown(ConsoleKey.RightArrow)) - Convert.ToInt32(InputDown(ConsoleKey.LeftArrow)),
            Convert.ToInt32(InputDown(ConsoleKey.DownArrow)) - Convert.ToInt32(InputDown(ConsoleKey.UpArrow))
        ) * 10.0f * Game.DeltaTime;

        // Limit max speed
        _velocity = new Vector2(MyMathF.Clamp(_velocity.X, _maxSpeed), MyMathF.Clamp(_velocity.Y, _maxSpeed));

        // Approximate friction
        _velocity *= 1.0f / (1.0f + (Game.DeltaTime * Friction));

        // Set position on Transform
        Transform.Position += _velocity;

        // Update Camera
        Game.Camera.SetTarget(Transform.Position);

        // Update sprite
        float length = MathF.Sqrt(_velocity.X * _velocity.X + _velocity.Y * _velocity.Y);
        Sprite = length > 0.001f ? _walkSprite : _idleSprite;
    }
}
```

### Room Management
Game objects are always part of a room.
Rooms all derive from a Room base class that provides some commonly used methods and properties.

```csharp
public class RoomTitle : Room
{
    public override void Setup()
    {
        AddGameObject<ActorTitle>(1, Game.Camera.Size / 2 + Vector2Int.Up * 6);
        
        AddSpriteObject(1, Game.Camera.Size - SpriteDatabase.SprControls.Data.Size - Vector2Int.One, SpriteDatabase.SprControls);

        // Create rain particles
        for (int i = 0; i < 100; i++) { AddGameObject<ActorRainParticle>(0, Vector2Int.Zero); }
    }
}
```

In the game class itself you can then set up the starting room like this.

```csharp
public class MonsterFightGame : Game
{
    public MonsterFightGame(Vector2Int gameSize) : base(gameSize) { RoomGoto<RoomTitle>(); }
}
```

Other game objects can also call RoomGoto to change rooms.

## Reflection

### What I learned

#### Managing console windows
I haven't really done something like that before, so I used a lot of console window functions that I wouldn't normally use.
It was quite rewarding when the first sprite was rendered correctly.

### Things that could be better

#### More modular game objects
The game objects are quite rigid, and I kind of wished I added a component system. 
But since this project wasn't graded and other projects had a higher priority than this, I had to make some compromises.

## Results

### Source Code
The project is fully open source and available here: [https://github.com/xWinuX/MonsterFightSimulator](https://github.com/xWinuX/MonsterFightSimulator)



