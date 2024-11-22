<template>
  <div class="relative">
    <p class="text-center text-red-400 italic">
      {{ $t('YoutubeEmbedConsent') }}
    </p>
    <iframe
      width="100%"
      height="600px"
      :src="videoLink"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  videoId: string;
}

const props = defineProps<Props>();

const videoLink = computed(() => `https://www.youtube-nocookie.com/embed/${props.videoId}`);

</script>
