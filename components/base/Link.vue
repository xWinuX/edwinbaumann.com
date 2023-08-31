<template>
  <div class="transition ease-in-out group hover:scale-105">
    <a class="font-bold gradient-text" :href="link">
      <slot />
    </a>

    <div class="relative opacity-0 transition glow glow-md group-hover:opacity-20" />

    <BaseGradientLine class="!h-[0.1rem]" />
  </div>
</template>

<script setup lang="ts">
interface Props {
    link: string;
}

defineProps<Props>();
</script>

<style scoped>

</style>
