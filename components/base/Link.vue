<template>
  <div class="transition ease-in-out group/link hover:scale-105 shadow">
    <a class="font-bold gradient-text text-glow-inner text-shadow-normal break-all text-[3vw] sm:text-base" target="_blank" :href="link" rel="noreferrer noopener">
      <slot />
    </a>

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
.str{
    -webkit-text-stroke-width: 0.05rem;
    -webkit-text-stroke-color: var(--glow-middle-color);
}
</style>
