<template>
  <BaseTooltipIcon v-if="Technology[technology]" class="svg-shadow-normal" :name="Technology[technology].iconName" :tooltip="Technology[technology].tooltip" size="3rem" />
  <div v-else>
    technology icon {{ technology }} does not exist
  </div>
</template>

<script setup lang="ts">

import { Technology, TechnologyKey } from "~/types/project";

export interface Props {
  technology: TechnologyKey
}

defineProps<Props>();
</script>
