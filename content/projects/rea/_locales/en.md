# REA

REA is a [Noita](https://noitagame.com)-inspired simulation that simulates every single pixel in a grid.
The application uses my custom game engine (see the Split Engine project for more info on that).
It served as the primary focus of my bachelor’s thesis project, and every simulation feature can be seen in the video below

::youtube-embed{videoId="Z3g9vX-LSzQ"}
::

## Features

It uses multithreading and compute shaders to simulate thousands of pixels efficiently and contains the following features:

- An editor that can be used to experiment with all the pixel types that exist.
- An explorer mode that procedurally generates a simple world in which the player can move a character.
- Pixels can have the following features:
    - Sand-like behaviour
    - Fluid/Gas-like behaviour
    - Temperature interactions
    - Electricity interactions
    - Acidity interactions
    - Be part of a rigid body that moves all pixels in it with the [Box2D](https://box2d.org) physics engine

## Reflection

### What I learned

#### Compute Shaders

This was my first extensive experience with compute shaders, which required learning a lot about GPU architecture and how to optimize code and data for it.

#### Vulkan

Working with compute shaders deepened my understanding of Vulkan, particularly queues and buffer structures, as I needed to add compute shader support to my engine.

#### Box2D

Although I’d previously encountered Box2D in Game Maker Studio, this was my first time using the raw library without additional abstraction.
The library was intuitive, and I quickly adapted to it.

#### Prozedural Generation

Procedural generation was a smaller aspect of the project, but I learned extensively from it.
Using the [FastNoise2](https://github.com/Auburn/FastNoise2) library, I generated noise maps that were essential in creating terrain, caves, and other elements like ores and water.
I also developed a recursive approach for generating trees.

### Things that could be better

#### Shader Code

Since GLSL is a relatively simple language without much support for abstraction, the shader code is messier than I’d prefer.
I would like to abstract some frequently repeating sections, though doing so might require a custom parser, which I didn’t have time to implement.

#### Rigid Body Pixel Simulation

Although the rigid body pixel simulation functions, there are still issues, such as holes appearing in shapes during rotation and occasional freezes in certain edge cases.
One potential solution would be to remove the CPU-based physics engine entirely and simulate all physics on the GPU.

## Results

### Source Code

The project is fully open source and available here: [https://github.com/xWinuX/REA](https://github.com/xWinuX/REA)

### Grade

The final grade was a First (University of Hertfordshire grading scale), which is equivalent to a 5.5 on the Swiss grading scale.

