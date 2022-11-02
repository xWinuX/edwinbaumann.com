<template>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
    <title>{{ title }}</title>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
withDefaults(defineProps<{ title: string }>(), {title: "Default Title"});
</script>
