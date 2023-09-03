<template>
  <div class="transition ease-in-out group/link hover:scale-105">
    <a class="font-bold gradient-text" target="_blank" :href="link" rel="noreferrer noopener">
      <slot />
    </a>

    <div class="relative opacity-0 group-hover/link:opacity-20 transition glow glow-md" />

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
