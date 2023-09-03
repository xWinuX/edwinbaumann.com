<template>
  <div class="group w-[400px] h-[500px]">
    <div
      ref="card"
      class="h-full w-full rounded-xl bg-cover bg-top bg-no-repeat card group glow-shadow cursor-pointer"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
        backgroundImage: `url(${thumbnail})`
      }"
    >
      <div class="flex h-full flex-col">
        <!-- Title -->
        <BaseProjectTileContent class="flex-row m-2 p-5 text-center">
          <h2 class="mb-2 font-bold">
            Cpp Game Engine
          </h2>
          <BaseGradientLine />
        </BaseProjectTileContent>

        <BaseProjectTileContent v-if="true" class="m-5 p-5">
          <p>asdasdasd</p>
          <p>asdasdasd</p>
        </BaseProjectTileContent>

        <!-- Icons and duration -->
        <div class="mt-auto flex flex-row place-items-end justify-end gap-3 p-2">
          <BaseProjectTileContent class="mr-auto p-4 font-bold">
            3 Months
          </BaseProjectTileContent>
          <BaseTechnologyIcon technology="Cpp" />
          <BaseTechnologyIcon technology="OpenGL" />
        </div>
      </div>
    </div>
    <div class="relative opacity-0 glow glow-project-tile group-hover:opacity-20" />
  </div>
</template>

<script setup lang="ts">

import thumbnail from "assets/images/projects/cpp-game-engine/main.png";
const card = ref();
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(card);

const cardTransform = computed(() => {
    if (isOutside.value) {
        return "";
    }

    const maxRotation = 6;

    const rX = (maxRotation / 2 - (elementY.value / elementHeight.value) * maxRotation).toFixed(2); // handles x-axis

    const rY = ((elementX.value / elementWidth.value) * maxRotation - maxRotation / 2).toFixed(2); // handles y-axis

    return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

</script>
