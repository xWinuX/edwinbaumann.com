<template>
  <a class="group" :href="link" target="_blank">
    <Icon class="transition-transform scale-100 shadow-none group-hover:shadow-glow hover:scale-[110%] svg-shadow-normal" :name="iconName" :size="size" />

  </a>
</template>

<script setup lang="ts">

interface Props {
  link: string;
  iconName: string;
  tooltip?: string;
  size?: string;
}

withDefaults(defineProps<Props>(), {
    tooltip: "",
    size: "3.5rem",
});
</script>
