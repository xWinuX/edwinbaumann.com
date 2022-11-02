<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
            <title>{{ title }}</title>
        </head>
        <body class="flex flex-col h-screen justify-between">
            <slot/>
        </body>
    </html>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

withDefaults(defineProps<{ title: string }>(), {title: "Default Title"});
</script>