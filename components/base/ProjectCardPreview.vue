<template>
  <div class="group max-w-[400px] max-h-[600px] w-full h-[100vh]">
    <BaseProjectCard class="w-full h-full" :project="project" :hover-effect="fadeOutDetails">
      <div class="mt-2 transition-opacity h-full relative" :class="fadeOutDetails ? 'opacity-100' : 'opacity-0'">
        <NuxtImg
          class="rounded-xl absolute w-full h-full"
          placeholder
          format="webp"
          :modifiers="{ animated: project.thumbnailFormat == 'gif'}"
          :src="`/projects/${project.name}/media/thumbnail.${project.thumbnailFormat}`"
        />
      </div>
      <div class="transition-opacity mt-auto pt-2" :class="fadeOutDetails ? 'opacity-100' : 'opacity-0'">
        <div class="mb-2 flex">
          <BaseProjectTileContent class="font-bold p-2">
            {{ yearSpan }}
          </BaseProjectTileContent>
        </div>

        <BaseProjectTileContent
          class="flex-row mb-2 p-4 justify-items-end justify-end align-bottom transition duration-500"
        >
          {{ description }}
        </BaseProjectTileContent>

        <!-- Icons and duration -->
        <div class="flex flex-row gap-2">
          <BaseProjectTileContent class="mr-auto p-4 text-center font-bold">
            {{ duration }}
          </BaseProjectTileContent>
          <BaseProjectTileContent v-for="technology in project.technologies" :key="technology" class="p-1">
            <BaseTechnologyIcon :technology="technology" />
          </BaseProjectTileContent>
        </div>
      </div>
    </BaseProjectCard>
    <div class="relative opacity-0 glow glow-project-tile group-hover:opacity-10" />
  </div>
</template>

<script setup lang="ts">
import humanizeDuration from "humanize-duration";
import type { Project } from "~/types/project";
import { createTranslatedYearSpan, dateToECMAFormat } from "~/utils/date";

export interface ProjectTileProps {
  project: Project;
  fadeOutDetails?: boolean;
}

const { locale } = useI18n();

const props = withDefaults(defineProps<ProjectTileProps>(), {
    fadeOutDetails: true,
});

const description = computed(() => props.project.description[locale.value]);

const yearSpan = computed(() => {
    return createTranslatedYearSpan(props.project.dateStart, props.project.dateEnd);
});

const duration = computed(() => {
    const dateStart = new Date(dateToECMAFormat(props.project.dateStart));
    const dateEnd = new Date(dateToECMAFormat(props.project.dateEnd));
    const diffTime = Math.abs(dateEnd - dateStart);
    let unit = "mo";
    const numDays = diffTime / 1000 / 60 / 60 / 24;
    if (numDays < 30) {
        unit = "d";
    }

    return humanizeDuration(diffTime, { language: locale.value, units: [unit], round: true });
});

</script>
