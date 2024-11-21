<template>
  <div v-if="!declined" class="relative">
    <div
      v-if="!consent"
      class="absolute w-full h-full bg-gray-900/80 backdrop-blur-md"
    >
      <div class="absolute left-1/2 top-1/2 text-center w-full" style="transform: translate(-50%, -50%)">
        <p>
          By playing the following video you consent to any data that may be collected by YouTube. <br>
          The video can also be directly watched via this link: <a target="_blank" :href="videoLink">{{ videoLink }}</a>
        </p>
        <BaseButton class="bg-green-400" @click="() => consent = true">
          Consent
        </BaseButton>
        <BaseButton class="ml-4 !bg-red-900" @click="() => declined = true">
          Decline
        </BaseButton>
      </div>
    </div>
    <iframe
      width="100%"
      height="600px"
      :src="noCookieVideoLink"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
  </div>
  <div v-else class="pt-4">
    <p class="text-center text-gray-400">
      <i>Consent to use this youtube embed was declined, the video can still be accessed directly on YouTube via this link: <a target="_blank" :href="videoLink">{{ videoLink }}</a></i>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  videoId: string;
}

const props = defineProps<Props>();

const noCookieVideoLink = computed(() => `https://www.youtube-nocookie.com/embed/${props.videoId}`);
const videoLink = computed(() => `https://www.youtube.com/watch?v=${props.videoId}`);

const consent = ref(false);
const declined = ref(false);
</script>
