<template>
  <div>
    <div class="flex flex-col flex-shrink gap-10">
      <ProjectTile
        v-for="(project, index) in projects"
        :key="index"
        ref="projectTiles"
        class="grow-animation m-auto"
        :class="project.isExpanded ? 'w-full h-[80vh]' : 'delay-grow-animation cursor-pointer'"
        :is-expanded="project.isExpanded"
        @click="onClick(index)"
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
import { BaseProjectTileContent } from "#components";

const { onLoop, resume } = useRenderLoop();

const clickedProject: Ref<boolean> = ref(false);

const projectTiles = ref<(InstanceType<typeof ProjectTile> | null)[]>();

const previousSelectedIndex = ref(-1);

const projects = ref([
    { isExpanded: false },
    { isExpanded: false },
    { isExpanded: false },
    { isExpanded: false },
    { isExpanded: false },
    { isExpanded: false },
    { isExpanded: false },
    { isExpanded: false },
]);

function onClick(selectedIndex: number) {
    let delay = 0;
    if (previousSelectedIndex.value === -1) {
        delay = 550;
    }

    for (let i = 0; i < projects.value.length; i++) {
        if (projects.value[i].isExpanded) {
            delay = 1050;
            break;
        }
    }

    setTimeout(() => {
        if (!projectTiles.value) { return; }
        projectTiles.value[selectedIndex].$el.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    }, delay);

    if (!projects.value[selectedIndex].isExpanded) {
        for (let i = 0; i < projects.value.length; i++) {
            projects.value[i].isExpanded = i === selectedIndex ? !projects.value[i].isExpanded : false;
        }
    }

    previousSelectedIndex.value = selectedIndex;
}

onMounted(() => {

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
