<template>
  <div>
    <div class="flex flex-row flex-wrap place-content-center gap-10">
      <ProjectTile
        id="tile"
        class="relative grow-animation"
        :class="clickedProject ? 'w-full h-[80vh]' : 'delay-grow-animation cursor-pointer'"
        :is-expanded="clickedProject"
        @click="() => { if (!clickedProject) { onClick(); } }"
      />
    </div>

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
  </div>
</template>

<script setup lang="ts">
import { Vector3 } from "three";
import ProjectTile from "~/components/base/ProjectTile.vue";

const { onLoop, resume } = useRenderLoop();

const clickedProject: Ref<boolean> = ref(false);

function onClick() {
    clickedProject.value = !clickedProject.value;

    useGlobalStore().setPageScrollState(!clickedProject.value);
}

onMounted(() => {
    setInterval(() => {
        if (clickedProject.value) {
            document.getElementById("tile")?.scrollIntoView({
                behavior: "auto",
                block: "center",
                inline: "center",
            });
        }
    });
});

/*
    - Game jams
    - "Finished" school games
    - Portfolio project
    - CPP Game Engine
    - Website
 */

</script>

<style scoped>

.grow-animation {
    transition: width 0.5s, height 0.5s;
}

.delay-grow-animation {
    transition-delay: 0.5s;
}

</style>
