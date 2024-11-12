# Split Engine
Split Engine is a game engine written in C++ with Vulkan as its graphics API.
I created it to prepare for my bachelor's s thesis and to deepen my understanding of C++ in addition to learning Vulkan,
building upon my previous experience with OpenGL from my last game engine.
(See project C++ Game Engine for more info on that.)

## Features

### Build System
Instead of solely using the Visual Studio Project file as I did in my last engine,
I used [CMake](https://cmake.org) alongside [VCPKG](https://vcpkg.io) to manage the build system and dependencies.

### Rendering
The game engine uses Vulkan for rendering, specifically the C++ headers of the API.
In addition to these headers, I use [SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross) to automatically generate Vulkan Pipelines and Descriptor Sets from shaders.

### Audio
Audio was definitely not a focus when creating the engine, so it just contains a basic implementation of the [SoLoud](https://solhsa.com/soloud/) Library.

### Input 
Like audio, input was also implemented rather simply. It is all managed by a single static class and is based on Actions that are predefined by users.

```cpp
enum class InputAction
{
    Move,
    Fire,
    Fly,
    Jump,
};

// Register actions
Input::RegisterAxis2D(InputAction::Fly, { KeyCode::A, KeyCode::D }, { KeyCode::S, KeyCode::W });
Input::RegisterAxis(InputAction::Move, { KeyCode::A, KeyCode::D });
Input::RegisterButtonAction(InputAction::Fire, KeyCode::MOUSE_LEFT);
Input::RegisterButtonAction(InputAction::Jump, KeyCode::SPACE);

// Read values
bool jumped = Input::GetButtonActionPressed(InputAction::Jump);
float moveDirection = Input::GetAxisActionDown(InputAction::Move);
glm::vec2 flyDirection = Input::GetAxis2DActionDown(InputAction::Fly);
```

### Game Object Management
The biggest and most complex part of the engine is the custom-built Entity Component System (ECS).
It consists of the following:

#### Entities
An entity logically consists of components, but in practice, it's just an ID used to query the ECS registry for its components, 
as they aren't managed by each entity individually.

#### Components
A component is typically plain data and is always associated with an entity.
```cpp
struct SpriteRenderer
{
    AssetHandle<Sprite> SpriteTexture;
    float               AnimationSpeed    = 0;
    float               CurrentFrame      = 0;
    uint32_t            PreviousTextureID = 0;
};
```

While a component can also include functions that act on data, most operations should be handled within a system.

#### Systems
A system operates on a specific set of components defined via template arguments.

```cpp
class PlayerAnimation final : public ECS::System<Component::Player, Component::SpriteRenderer>
{
    protected:
        void Execute(Component::Player*         players,
                     Component::SpriteRenderer* spriteRenderers,
                     std::vector<uint64_t>&     entities,
                     ECS::ContextProvider&      contextProvider,
                     uint8_t                    stage) override;
};
```

In this example, it only acts on entities that possess both a Player and a SpriteRenderer component.

#### Contexts
Contexts are accessed via a context provider passed into each system.
They allow data sharing across systems without explicit references.

```cpp
Rendering::Renderer* renderer = contextProvider.GetContext<RenderingContext>()->Renderer;
```

For instance, multiple systems requiring access to the engine's renderer can obtain it from the rendering context.
Users can also register custom contexts.

```cpp
ECS::Registry& ecs = application.GetECSRegistry();
ecs.RegisterContext<Context::ImGui>({});
```

#### Stages
As seen above, a stage parameter is passed into each system's Execute function.
This parameter is useful when a system is configured to run multiple times per frame.
For example, in Unity, Update and LateUpdate are executed at different points in the frame.
With the stages system, a simple if-check in the Execute function can determine the current active stage.

```cpp
if (stage == Stage::Update)
{
    // Perform Update logic
}

if (stage == Stage::LateUpdate)
{
    // Perform LateUpdate logic
}
```

For more advanced usage, you can extend the System class to abstract stages into their own functions, which can then be overridden in derived classes.
This system provides users with great flexibility, allowing them to define custom stages and hook into the engine's stages.

#### Groups
Groups are a way a level system can be achieved using the ecs system, groups are nothing more than just an identifier. 
Each entity always belongs to one group by default, I call this the primary group.
The primary group can be changed so that all following entity creations will take place within it as well.
User can also specify a specific group when creating entities to have multiple levels active at once or having a level that is always active.
If you want to switch level, for example, you can call a function on the ecs registry that deletes all entities that belong to a specific group.

### Distribution
I wanted to use this engine as a base for my bachelor thesis, so I wanted it to be easy to add to a new project.
Since I already use VCPKG to manage my dependencies, I wanted to be able to distribute the engine through that aswell.
In VCPKG you can create your own package registry that holds packages that aren't available in the official ones.
I created one, and after a lot of trial and error managed to make it work, you just have to add the custom registry in your VCPKG configuration file.
```json
{
  "registries": [
    {
      "kind": "git",
      "repository": "https://github.com/xWinuX/vcpkg-registry",
      "baseline": "47682ab536513636987c082649fde0bbe658ba04",
      "packages": [
        "split-engine"
      ]
    }
  ]
}
```

## Reflection
I’m really happy with the results of the engine, I especially like how the ECS turned out and how flexible the overall engine is.

### What I learned

#### Vulkan
This is my first time ever using Vulkan, so everything related to that was completely new to me. 
There are still a lot of things I haven't done yet, but I’m pretty confident about the general concepts behind it.

#### CMake
This was also my first time using CMake. 
It was a bit hard to get into at first, but at the end it's way better on more flexible than just using Visual Studio Project files, and I will continue to use it in future C++ Projects.

#### VCPKG
I've actually tried VCPKG in my first game engine project, but then decided to just manage my dependencies manually, which was a huge mistake.
So I've taken the time to actually learn how to use it properly this time, and it saved me a bunch of time and made managing dependencies so much easier.
The only thing bad about it is that not every dependency I used had a package on it, for example, SoLoud.

#### C++
This is my second time using C++ for a project, and I've used a lot I've learned from my previous project to improve the code quality.
In my old engine I used a lot of raw pointers and manually allocated memory, I now use smart pointers instead whenever possible.
I've also structured the code way better and made it more modular.

### Things that could be better

#### More of a framework than an engine
The whole project is less of an engine and more of a framework since it doesn’t contain stuff like predefined components for rendering a mesh or playing audio.
The user is supposed to create their own, so they can structure it like they want. 

#### Audio
The audio, like mentioned before, is rather basic as well, so that's certainly a point where the engine could be massively improved.

#### Model Importer
The engine itself also doesn’t contain an importer for model files, so the user would have to integrate one themselves.

#### Better Input
The input system itself is also really basic and not really implemented cleanly and stuff like controller support is also missing.

## Results

### Source Code
The project is fully open source and available here: [https://github.com/xWinuX/SplitEngine](https://github.com/xWinuX/SplitEngine)
The custom VCPKG registry can be found here: https://github.com/xWinuX/vcpkg-registry

### Grade
This project was a preparation for my thesis and was also graded.
The final grade was a First+ (University of Hertfordshire grading scale), which is equivalent to a 6.0 on the Swiss grading scale.

