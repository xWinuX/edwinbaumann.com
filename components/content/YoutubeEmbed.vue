<template>
  <div class="relative">
    <p class="text-center text-red-400 italic">
      {{ $t('youtubeEmbedConsent') }}
    </p>
    <div class="aspect-ratio">
      <iframe
        :src="videoLink"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  videoId: string;
}

const props = defineProps<Props>();

const videoLink = computed(() => `https://www.youtube-nocookie.com/embed/${props.videoId}`);

</script>

<style scoped>

.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.aspect-ratio iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

</style>
