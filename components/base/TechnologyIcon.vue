<template>
  <BaseProjectTileContent class="p-1">
    <BaseTooltipIcon :name="technologyLookup[technology].iconName" :tooltip="technologyLookup[technology].tooltip" size="3rem" />
  </BaseProjectTileContent>
</template>

<script setup lang="ts">
export type Technology = "Cpp" | "OpenGL";

export interface Props {
    technology: Technology
}

const technologyLookup: Record<Technology, {iconName: string; tooltip: string;}> = {
    Cpp: { iconName: "vscode-icons:file-type-cpp3", tooltip: "C++" },
    OpenGL: { iconName: "devicon:opengl", tooltip: "OpenGL" },
};

defineProps<Props>();
</script>
