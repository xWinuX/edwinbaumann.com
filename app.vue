<template>
  <Body class="m-0 bg-gray-900 p-0 text-white min-h-[100vh]">
    <NuxtScrollbar class="overflow-y-hidden h-[100vh]" watch-options :options="scrollOptions">
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </NuxtScrollbar>
  </Body>
</template>

<script setup lang="ts">

const scrollOptions = computed(() => {
    return {
        // suppressScrollY: !useGlobalStore().pageScrollEnabled,
        wheelSpeed: useGlobalStore().pageScrollEnabled ? 1 : 0,
        maxScrollbarLength: useGlobalStore().pageScrollEnabled ? null : "0px",
    };
});
</script>
