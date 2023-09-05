<template>
  <div ref="content" class="rounded-xl bg-gray-900/60 backdrop-blur-md text-shadow-normal shadow-normal">
    <slot />
  </div>
</template>

<script setup lang="ts">
const content = ref<HTMLElement>();

defineExpose({
    content,
});
</script>
