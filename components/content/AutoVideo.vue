<template>
  <video autoplay loop preload="none">
    <source :src="src" type="video/mp4">
    Your browser does not support videos.
  </video>
</template>

<script setup lang="ts">
interface Props {
  src: string;
}

defineProps<Props>();

</script>
