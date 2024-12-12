<template>
  <div class="inline-block group/link">
    <NuxtLink class="font-bold gradient-text" :target="target" :to="link" rel="noreferrer noopener">
      <slot />
    </NuxtLink>
    <BaseGradientLine class="!h-[0.15rem] transition ease-in-out scale-x-0 group-hover/link:scale-x-100" />
  </div>
</template>

<script setup lang="ts">
interface Props {
    link: string;
    target?: string;
}

withDefaults(defineProps<Props>(), {
    target: "",
});
</script>
