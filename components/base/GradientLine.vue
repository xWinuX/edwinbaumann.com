<template>
  <div
    class="rounded-xl bg-gradient-to-r from-emerald-400 to-blue-600 h-[0.2rem]"
    :class="'shadow-'+shadowType"
  />
</template>

<script setup lang="ts">
export interface Props {
    shadowType?: "normal" | "glow" | "none";
}

withDefaults(defineProps<Props>(), {
    shadowType: "glow",
});
</script>

<style scoped>
.smaller-glow {
    box-shadow: 0 0 5px #312e81; /* outer cyan */
}
</style>
