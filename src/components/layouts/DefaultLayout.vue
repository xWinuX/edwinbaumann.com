<template>
    <TheNavBar />
    <main>
        <slot />
    </main>
    <TheFooter />
</template>

<script setup lang="ts">
import TheNavBar from "../core/TheNavBar.vue";
import TheFooter from "../core/TheFooter.vue";
</script>