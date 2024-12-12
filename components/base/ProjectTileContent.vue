<template>
  <div ref="content" class="rounded-xl bg-black/40 backdrop-blur-md text-shadow-normal shadow-black">
    <slot />
  </div>
</template>

<script setup lang="ts">
const content = ref<HTMLElement>();

defineExpose({
    content,
});
</script>
