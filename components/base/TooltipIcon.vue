<template>
  <Icon v-tooltip="tooltip" :name="name" :size="size" />
</template>

<script setup lang="ts">
export interface Props {
    name: string;
    tooltip: string;
    size?: string;
}

withDefaults(defineProps<Props>(), {
    size: "1rem",
});
</script>
