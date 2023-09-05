<template>
  <BaseTooltipIcon class="svg-shadow-normal" :name="technologyLookup[technology].iconName" :tooltip="technologyLookup[technology].tooltip" size="3rem" />
</template>

<script setup lang="ts">
export type Technology = "Cpp" | "OpenGL";

export interface Props {
    technology: Technology
}

const technologyLookup: Record<Technology, {iconName: string; tooltip: string;}> = {
    Cpp: { iconName: "vscode-icons:file-type-cpp3", tooltip: "C++" },
    OpenGL: { iconName: "logos:opengl", tooltip: "OpenGL" },
};

defineProps<Props>();
</script>
