<template>
  <div>
    <div class="flex flex-shrink flex-row flex-wrap gap-10 justify-evenly">
      <BaseProjectCardPreview
        v-for="(project, index) in projects"
        ref="projectTiles"
        :key="project.name"
        :project="project"
        :fade-out-details="selectedIndex != index"
        :class="selectedIndex == index && hideSelected ? 'opacity-0' : ''"
        class="m-auto cursor-pointer"
        @click="onClick(project, index)"
      />
      <ModalsContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer, useModal } from "vue-final-modal";
import ProjectCardModal from "~/components/base/ProjectCardModal.vue";
import type { ProjectContent } from "~/types/project";
import type { VueUseElementBounding } from "~/types/vue-use";
import { dateToECMAFormat } from "~/utils/date";

const { data: projects }: { data: Ref<ProjectContent[]> } = await useAsyncData("projects", () => queryContent("projects").where({ _partial: false }).find());

projects.value.sort((a, b) => {
    return new Date(dateToECMAFormat(b.dateEnd)) - new Date(dateToECMAFormat(a.dateEnd));
});

const projectTiles = ref([]);

const projectData : Ref<ProjectContent> = ref(null);

const startState: Ref<VueUseElementBounding> = ref(null);

const selectedIndex = ref(-1);
const hideSelected = ref(false);

// Get path for thumbnail
projects.value.forEach((item) => {
    item.name = item._path.split("/").pop() as string;
});

const { open: openModal, close: closeModal } = useModal({
    component: ProjectCardModal,
    attrs: {
        project: projectData,
        onClose,
        startState,
    },

});

function onClick(project: ProjectContent, index: number) {
    projectData.value = project;
    selectedIndex.value = index;

    startState.value = useElementBounding(projectTiles.value[index]);

    setTimeout(async () => {
        await openModal();
        hideSelected.value = true;
    }, 100);
}

async function onClose() {
    await closeModal();
    selectedIndex.value = -1;
    hideSelected.value = false;
}

</script>
