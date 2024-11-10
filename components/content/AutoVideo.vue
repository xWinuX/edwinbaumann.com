<template>
  <video autoplay>
    <source :src="src" type="video/mp4">
    Your browser does not support videos.
  </video>
</template>

<script setup lang="ts">

export interface Props {
  src: string;
}

defineProps<Props>();

</script>
