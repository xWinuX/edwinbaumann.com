# Split Engine
Split Engine is a game engine written in C++ using Vulkan as its graphics API.
I created it to deepen my understanding of C++ and to learn Vulkan after working with OpenGL in my previous engine.

## Features

### Build System
Unlike my previous engine where I used a Visual Studio project file, 
this time I used [CMake](https://cmake.org) along with [VCPKG](https://vcpkg.io) for managing the build process and dependencies.

### Rendering
The engine leverages Vulkan for rendering, specifically using its C++ bindings. 
Additionally, I utilize [SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross) to automatically generate Vulkan Pipelines and Descriptor Sets from shaders.

### Game Object Management
The engine features a custom-built Entity Component System (ECS), based on the archetype model. 
Here’s how it works:

#### Entities
An entity is essentially a collection of components, but in practice, it's just an ID. 
This ID is used to query the ECS registry for its associated components since these are not directly managed by the entity.

#### Components
Components are typically plain data structures linked to an entity.

```cpp
struct SpriteRenderer {
    AssetHandle<Sprite> SpriteTexture;
    float               AnimationSpeed = 0;
    float               CurrentFrame = 0;
    uint32_t            PreviousTextureID = 0;
};
```

While components can have functions, most of the logic should reside in systems.

#### Archetypes
An archetype defines how components are stored. 
Each unique combination of components forms its own archetype. 
For example, all enemy entities with the same component set (like Transform, SpriteRenderer, and Enemy components) will share the same archetype.

This design optimizes memory layout, improving cache efficiency during component iteration in systems. 
When components are added or removed, new archetypes are created if necessary. 
Archetypes maintain a graph of neighboring archetypes to quickly handle common operations like adding or removing a single component.

#### Systems
A system operates on a specific set of components, defined via template arguments.

```cpp
class PlayerAnimation final : public ECS::System<Component::Player, Component::SpriteRenderer> {
protected:
    void Execute(Component::Player*         players,
                 Component::SpriteRenderer* spriteRenderers,
                 std::vector<uint64_t>&     entities,
                 ECS::ContextProvider&      contextProvider,
                 uint8_t                    stage) override;
};
```

In this example, the system processes entities containing both Player and SpriteRenderer components.

#### Contexts
Contexts allow data sharing across systems without explicit references, accessed through a context provider passed to each system.

```cpp
Rendering::Renderer* renderer = contextProvider.GetContext<RenderingContext>()->Renderer;
```

For example, multiple systems needing access to the renderer can fetch it from the rendering context.

```cpp
ECS::Registry& ecs = application.GetECSRegistry();
ecs.RegisterContext<Context::ImGui>({});
```

#### Stages
Systems can run multiple times per frame using the stage parameter in the `Execute` function. For instance, you can distinguish between `Update` and `LateUpdate` stages.

```cpp
if (stage == Stage::Update) 
{
    // Update logic
}

if (stage == Stage::LateUpdate) 
{
    // LateUpdate logic
}
```

For added flexibility, you can subclass the System class, abstracting stages into separate overridable functions.

This system empowers users to define custom stages or hook into existing ones used by the engine.
