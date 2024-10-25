<template>
  <div class="group w-[400px] h-[600px]">
    <div
      ref="card"
      class="h-full w-full rounded-xl bg-cover bg-top bg-no-repeat card group shadow-glow"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
        backgroundImage: `url(/projects/${project.path}/media/thumbnail.${project.thumbnailFormat})`
      }"
    >
      <div class="flex flex-col h-full mr-2 ml-2 pb-2 pt-2">
        <!-- Title -->
        <BaseProjectTileContent class="flex-col p-5 text-center">
          <div class="flex flex-row">
            <Icon
              class="transition absolute text-emerald-400 top-[1.1rem] svg-shadow-glow scale-0"
              name="mingcute:large-arrow-left-fill"
              size="1.8rem"
            />
            <h2 class="m-auto mb-2 text-shadow-normal font-bold">
              {{ project.name }}
            </h2>
          </div>

          <BaseGradientLine shadow-type="glow" />
        </BaseProjectTileContent>

        <div class="mt-auto mb-2 flex">
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
        <div class="flex flex-row gap-2 justify-self-end">
          <BaseProjectTileContent class="mr-auto p-4 text-center font-bold">
            {{ duration }}
          </BaseProjectTileContent>
          <BaseProjectTileContent v-for="technology in project.technologies" :key="technology" class="p-1">
            <BaseTechnologyIcon :technology="technology" />
          </BaseProjectTileContent>
        </div>
      </div>
    </div>
    <div class="relative opacity-0 glow glow-project-tile group-hover:opacity-20" />
  </div>
</template>

<script setup lang="ts">
import humanizeDuration from "humanize-duration";
import type { Project } from "~/types/project";
import { dateToECMAFormat } from "~/utils/date";

export interface ProjectTileProps {
  project: Project;
}

const { locale } = useI18n();

const props = defineProps<ProjectTileProps>();

const card = ref();
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(card);
const cardTransform = computed(() => {
    if (isOutside.value) {
        return "";
    }

    const maxRotation = 6;
    const rX = (maxRotation / 2 - (elementY.value / elementHeight.value) * maxRotation);
    const rY = ((elementX.value / elementWidth.value) * maxRotation - maxRotation / 2);

    return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

const description = computed(() => props.project.description[locale.value]);

const yearSpan = computed(() => {
    const dateStart = new Date(dateToECMAFormat(props.project.dateStart));
    const dateEnd = new Date(dateToECMAFormat(props.project.dateEnd));
    const yearStart = dateStart.toLocaleString(locale.value, { month: "long" }) + " " + dateStart.getFullYear().toString();
    const yearEnd = dateEnd.toLocaleString(locale.value, { month: "long" }) + " " + dateEnd.getFullYear().toString();
    return yearStart !== yearEnd ? yearStart + " - " + yearEnd : yearStart;
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
