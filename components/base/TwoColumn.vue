<template>
  <div class="flex" :class="doNotWrapOnMobile ? 'flex-row' : 'flex-col sm:flex-row'">
    <div :class="doNotWrapOnMobile ? 'first-width-no-wrap' : 'first-width'" class="flex-shrink-0 pr-0 font-bold sm:m-0 sm:mt-auto sm:mb-auto sm:pr-3">
      {{ label }}:
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  label: string,
  size?: string
  doNotWrapOnMobile?: boolean;
}

withDefaults(defineProps<Props>(), {
    size: "8rem",
    doNotWrapOnMobile: false,
});
</script>

<style scoped>
.first-width-no-wrap {
  width: v-bind(size);
}

.first-width {
  width: auto;
}

@media (min-width: 640px) {
  .first-width {
    width: v-bind(size);
  }
}
</style>
