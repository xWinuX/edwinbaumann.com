<template>
  <div>
    <div
      ref="card"
      class="w-full h-full rounded-xl bg-cover bg-top bg-no-repeat card group shadow-normal relative"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
      }"
    >
      <!-- Background -->

      <!-- Overlay higher res static background image on expand (overlaying instead of replacing fixes the flickering on switching) -->
      <NuxtImg
        class="rounded-xl w-full h-full absolute object-cover"
        width="20px"
        height="20px"
        format="webp"
        :modifiers="{blur: '4'}"
        :src="`/projects/${project.name}/media/thumbnail.${project.thumbnailFormat}`"
      />

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

interface Props {
  project: Project;
  hoverEffect?: boolean;
  pauseAnimated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    hoverEffect: false,
    pauseAnimated: false,
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
