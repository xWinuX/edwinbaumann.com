<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
            <link rel="stylesheet" type="text/css" href="src/styles/base.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{{ title }}</title>
        </head>
        <body class="flex flex-col h-screen justify-between">
            <slot/>
        </body>
    </html>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title: string }>(), {title: "Default Title"});
</script>