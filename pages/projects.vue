<template>
  <div>
    <div class="flex flex-shrink flex-row flex-wrap gap-10">
      <div v-for="project in projects" :key="project.name">
        <BaseProjectTile
          :project="project"
          class="m-auto cursor-pointer"
          @click="onClick(index)"
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
import type { Project } from "~/types/project";

interface ProjectContent extends Project, ParsedContent {}

const { data: projects }: { data: Ref<ProjectContent[]> } = await useAsyncData("projects", () => queryContent("projects").find());

// Get path for thumbnail
projects.value.forEach((item) => {
    item.path = item._path.split("/").pop() as string;
});

console.log(projects.value);

const { open: openModal, close: closeModal } = useModal({
    component: ProjectModal,
});

async function onClick(selectedIndex: number) {
    await openModal();
}

async function onClose(selectedIndex: number) {
    await closeModal();
}

</script>
