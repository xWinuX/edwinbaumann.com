<template>
  <div ref="content" class="rounded-xl bg-gray-900/50 backdrop-blur-md normal-shadow">
    <slot />
  </div>
</template>

<script setup lang="ts">
const content = ref<HTMLElement>();

defineExpose({
    content,
});
</script>
