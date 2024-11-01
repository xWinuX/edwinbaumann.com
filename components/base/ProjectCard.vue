<template>
  <div>
    <div
      ref="card"
      class="w-full h-full rounded-xl bg-cover bg-top bg-no-repeat card group shadow-glow"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
        backgroundImage: `url(/projects/${project.name}/media/thumbnail.${project.thumbnailFormat})`
      }"
    >
      <div class="flex flex-col h-full mr-2 ml-2 pb-2 pt-2">
        <!-- Title -->
        <BaseProjectTileContent class="flex-col p-5 text-center">
          <div class="flex">
            <div>
              <slot name="header-begin" />
            </div>
            <h2 class="m-auto mb-2 text-shadow-normal font-bold">
              {{ project.displayName }}
            </h2>
            <div>
              <slot name="header-end" />
            </div>
          </div>

          <BaseGradientLine shadow-type="glow" />
        </BaseProjectTileContent>

        <slot :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

export interface ProjectTileProps {
  project: Project;
  hoverEffect?: boolean;
}

const props = withDefaults(defineProps<ProjectTileProps>(), {
    hoverEffect: false,
});

const card = ref();
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(card);
const cardTransform = computed(() => {
    if (isOutside.value || !props.hoverEffect) {
        return "";
    }

    const maxRotation = 6;
    const rX = (maxRotation / 2 - (elementY.value / elementHeight.value) * maxRotation);
    const rY = ((elementX.value / elementWidth.value) * maxRotation - maxRotation / 2);

    return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

</script>
