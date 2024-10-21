<template>
  <div>
    <div class="flex flex-shrink flex-row flex-wrap gap-10">
      <BaseProjectTile
        v-for="(project, index) in projects"
        :key="index"
        ref="projectTiles"
        class="m-auto grow-animation"
        :class="project.isExpanded ? '!w-full !h-[90vh]' : 'delay-grow-animation cursor-pointer'"
        :is-expanded="project.isExpanded"
        @click="onClick(index)"
        @close="onClose(index)"
      />
    </div>
  </div>
  <ModalsContainer />
</template>

<script setup lang="ts">
import { ModalsContainer, useModal } from "vue-final-modal";
import type { ParsedContent } from "@nuxt/content";
import ProjectModal from "~/components/base/ProjectModal.vue";

interface ProjectContent extends Project, ParsedContent {}

const { data }: { data: Ref<ProjectContent[]> } = await useAsyncData("projects", () => queryContent("projects").find());

console.log(data.value[0]._path.split("/").at(-1));
console.log(data.value[0].tags);

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
