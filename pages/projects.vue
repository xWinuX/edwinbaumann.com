<template>
  <div>
    <!--div>
    <div class="project-box">
      <Suspense>
        <TresCanvas alpha shadows>
          <TresPerspectiveCamera :position="new Vector3(0, 0, -5)" />
          <OrbitControls
            :auto-rotate="true"
            :enable-pan="false"
            :enable-zoom="false"
            :auto-rotate-speed="2"
          />
          <TresAmbientLight :intensity="0.5" />
          <Suspense>
            <GLTFModel :position="new Vector3(0, -1.0, 0)" path="/TimeWizard.glb" />
          </Suspense>
        </TresCanvas>
      </Suspense>
    </div-->

    <section>
      <h2 class="text-center font-bold font">
        C++ Game Engine
      </h2>
      <BaseGradientLine class="mt-3 mb-5" />
      <div class="flex flex-col gap-5 md:flex-row">
        <p class="m-auto basis-1 md:basis-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim et metus blandit auctor ac vitae justo. Praesent dui purus, lacinia quis ultrices vel, vulputate ac nibh. Quisque
          tincidunt nisi accumsan diam pretium, quis imperdiet nisi maximus. Proin ut est odio. Integer ut auctor eros, ac dictum ante. Aenean luctus, urna eget sagittis vehicula, turpis nisi
          congue quam, eget semper leo quam a elit. Cras lacinia euismod lectus, id egestas diam efficitur in. Nullam ultrices pellentesque congue. Mauris risus sapien, gravida vitae ipsum non,
          fringilla lobortis felis. Donec ultricies, ex suscipit euismod consequat, velit dolor facilisis elit, id tincidunt elit sapien ac felis. Praesent sagittis congue pharetra. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <div class="m-auto flex basis-1 flex-col md:basis-1/3">
          <img class="m-auto project-image" src="~/assets/images/projects/cpp-game-engine/main.png" alt="CPP Game Engine main image">
          <BaseTable
            class="m-auto mt-10"
            :table-data="{
              'technologies': { key: 'Technologies', value: '' },
              'Duration': '3.5 Months',
              'sourceCode': { key: 'Source Code', value: ''},
            }"
          >
            <template #technologies>
              <div class="flex flex-row gap-2">
                <BaseTechnologyIcon technology="Cpp" />
                <BaseTechnologyIcon technology="OpenGL" />
              </div>
            </template>
            <template #sourceCode>
              <BaseLink link="https://github.com/xWinuX/CppGameEngine">
                https://github.com/xWinuX/CppGameEngine
              </BaseLink>
            </template>
          </BaseTable>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Vector3 } from "three";

const { onLoop, resume } = useRenderLoop();

/*
    - Game jams
    - "Finished" school games
    - Portfolio project
    - CPP Game Engine
    - Website
 */

</script>

<style scoped>

.project-box {
    width: 350px;
    height: 350px;
    margin: 0 0 50px 0;

}

</style>
