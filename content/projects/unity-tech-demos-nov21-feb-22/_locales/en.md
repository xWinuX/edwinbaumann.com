# Unity Tech Demos
In the video below you can see a collection of small tech demos I did for a class in my studies.
The general purpose of these was to test knowledge on mathematics in the areas of simulation, AI behavior, and terrain generation.
A video of every demo I did is available below.

::youtube-embed{videoId="ERUTLf83agc"}
::

## Features
The tech demos include the following:
- A custom physics system that doesn’t use Unitys rigidbodies
- Insect-like movement (can stick to walls and climb them)
- Marching Squares in both 2D and 3D
- Cellular Automata
- Boids + Bee AI using boids
- Marching Cubes terrain with chunking
- Some shaders that are affected by environmental effects such as wind  

### Physics System
The physics system uses intersection algorithms along the objects movement vector to check for collisions.
All custom physics objects are attached a custom physics material that includes their friction and bounciness.
The collision resolver then solves collisions by calculating the new velocities of all colliding bodies so they can, for example, bounce of each other.
The simulation runs in a custom function that, similar to Unitys "FixedUpdate", runs in a fixed time step. \
\
The Physics system also includes wind that can affect objects.

### Insect Movement
The movement of the insect uses the physics system for general collision detection, but then uses a number of raycasts to calculate how it should stick and move along walls.
The movement itself works fairly well, but the camera I used is really not the best and can lead to some jank.

### Marching Squares
The Marching Squares algorithm was quite easy to implement by itself, the challenge was more on creating the mesh data in an efficient way.
It also works for both 2D and 3D meshes (3D meshes just generate walls at the side of the surfaces)

### Cellular Automata
Since Marching Square requires a grid of cells with data, running some kind of cellular automata on it was simple to implement.
I even made it really expandable by using Scriptable Objects so you could add even more.
For this demo I only implemented Conway's The Game Of Life and a cave generation cellular automaton.

### Boids
Boids are used to simulate swarm behavior like that of birds or insects. 
Boids gather data around them, including that of other boids and use it to navigate the world while avoiding obstacles and other boids. 
They use the velocity of other boids to adjust their own so they always stay together but never bump into each other.

### Bee AI
The bee AI uses a state machine to manage the different states bees can be in.
The bees main goal is to find a flower without a bee and collect its nectar, then bring it back to the hive.
The bees then communicate under themselves about which flowers they’ve been to make it easier for other bees to find flowers.
When a wasp enters their range, they will stop whatever they’re doing to attack it and once it's gone they will continue their work.\
\
The State machine itself is quite simple, but also really powerful. 
There are states that have different functions that the state machine can call.
```csharp
public interface IState
{
    void Tick();
    void OnEnter();
    void OnExit();
    IState SetOnEnterAction(Action action);
    IState SetOnExitAction(Action action);
}
```
In the state machine the user can then set transitions between these states.
Transitions always have a condition they need to meet to transition the state.
Transition can either be across all states, for example, the attack state of the bee, or from one state into another such as moving to the hive after getting nectar.

### Marching Cubes
The Marching Cubes terrain is fully destructible and uses 3D chunks to theoretically extend in each direction infinitely.
The entire system makes use of Unitys Job system and the Burst compiler to make it run as smoothly as possible.
It also uses a Scriptable Objects for its generation, so it can be easily modified.

![terrain generation scriptable object](../media/marching-cubes-terrain-settings.png)

Since the focus was more on the mesh generation itself, it's quite simple, but it works.

### Shaders
A lot of the shaders showcased are based on previous projects I did.
The new ones are the rain puddle shader, the water shader, and the shader for the grass.
Each of these shaders is affected by different parameters like the wind from the physics system and the rain from the weather system.

## Reflection

### What I learned

#### Marching Squares/Cubes
This was the first time I've ever used these algorithms.
Marching Squares was quite easy since the lookup table is quite small, 
but Marching Cubes took a lot of time to implement and then debug, because chunking made the whole thing a lot more difficult.

#### Boids
Implementing boids included a lot of trial and error tweaking the parameters, but was quite rewarding when it finally worked well.
The system is quite interesting, and I already have some ideas were I could use it in future projects.

### Things that could be better

#### Build out demos more
Since time was limited, I couldn't really spend too much time on each one individually.
I would have really liked to build some out even more.

#### Make demos "playable" outside the Unity Editor
To see and use the demos, you need to use the Unity Editor. 
It would have been better to have a menu where you can select the different demos and then look at them.
With a system like that I could even provide a download instead of just videos.

## Results

### Grade
The final grade was a 2 (University of Middlesex grading scale), which is equivalent to a 5.75 on the Swiss grading scale.

