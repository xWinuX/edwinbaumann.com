<template>
  <div class="font-bold">
    <component :is="headingTag" class="my-1" :class="autoSize ? 'table' : ''">
      <slot />
      <BaseGradientLine
        v-if="!noUnderline"
        :class="level === '1' || level === '2' ? 'mt-2' : 'mt-0'"
        :style="{
          height: underlineSize,
        }"
      />
    </component>
  </div>
</template>

<script setup lang="ts">

interface Props {
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  autoSize?: boolean;
  noUnderline?: boolean;
  underlineSize?: string;
}

const props = withDefaults(defineProps<Props>(), {
    level: "2",
    autoSize: false,
    noUnderline: false,
    underlineSize: "0.2rem",
});

const headingTag = computed(() => `h${props.level}`);

</script>
