<template>
  <Body class="m-0 bg-gray-900 p-0 text-white min-h-[100vh]">
    <OverlayScrollbarsComponent
      class="overflow-y-hidden h-[100vh] scroll-smooth"
      :options="{
        overflow: {x: 'hidden'}
      }"
      defer
    >
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </OverlayScrollbarsComponent>
  </Body>
</template>

<script setup lang="ts">
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

</script>
