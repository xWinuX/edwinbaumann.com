<template>
  <BaseTooltipIcon class="svg-shadow-normal" :name="Technology[technology].iconName" :tooltip="Technology[technology].tooltip" size="3rem" />
</template>

<script setup lang="ts">

import { Technology, TechnologyKey } from "~/types/project";

export interface Props {
  technology: TechnologyKey
}

defineProps<Props>();
</script>
