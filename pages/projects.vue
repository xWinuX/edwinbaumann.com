<template>
  <div>
    <div class="flex flex-shrink flex-col gap-10">
      <BaseProjectTile
        v-for="(project, index) in projects"
        :key="index"
        ref="projectTiles"
        class="m-auto grow-animation"
        :class="project.isExpanded ? '!w-full !h-[80vh]' : 'delay-grow-animation cursor-pointer'"
        :is-expanded="project.isExpanded"
        @click="onClick(index)"
        @close="onClose(index)"
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
        if (i !== selectedIndex && projects.value[i].isExpanded) {
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

    if (previousSelectedIndex.value === selectedIndex) {
        return;
    }

    if (!projects.value[selectedIndex].isExpanded) {
        for (let i = 0; i < projects.value.length; i++) {
            projects.value[i].isExpanded = i === selectedIndex ? !projects.value[i].isExpanded : false;
        }
    }

    previousSelectedIndex.value = selectedIndex;
}

function onClose(selectedIndex: number) {
    projects.value[selectedIndex].isExpanded = false;

    setTimeout(() => {
        previousSelectedIndex.value = -1;
    }, 500);
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
