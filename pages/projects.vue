<template>
  <div>
    <div class="flex flex-shrink flex-row flex-wrap gap-10 justify-evenly">
      <div v-for="project in projects" :key="project.name">
        <BaseProjectTile
          :project="project"
          class="m-auto cursor-pointer"
          @click="onClick(project)"
          @close="onClose(index)"
        />
      </div>
      <ModalsContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer, useModal } from "vue-final-modal";
import type { ParsedContent } from "@nuxt/content";
import ProjectModal from "~/components/base/ProjectModal.vue";
import type { ProjectContent } from "~/types/project";

const { data: projects }: { data: Ref<ProjectContent[]> } = await useAsyncData("projects", () => queryContent("projects").where({ _partial: false }).find());

const projectData : Ref<ProjectContent> = ref(null);

// Get path for thumbnail
projects.value.forEach((item) => {
    item.name = item._path.split("/").pop() as string;
});

console.log(projects.value);

const { open: openModal, close: closeModal } = useModal({
    component: ProjectModal,
    attrs: {
        projectData,
    },

});

async function onClick(project: ProjectContent) {
    projectData.value = project;
    await openModal();
}

async function onClose(selectedIndex: number) {
    await closeModal();
}

</script>
