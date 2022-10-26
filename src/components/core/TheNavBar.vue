<template>
    <nav class="mt-5">
        <div class="
            grid
            gap-4 ml-2 mr-2
            lg:grid-cols-4
            sm:grid-cols-1
        ">
            <p class="text-center border-2" v-for="number in navElements" v-bind:key="number">
                {{ number }}
            </p>
        </div>
    </nav>
</template>

<script setup lang="ts">
const navElements: string[] = [
    "Home",
    "Projects",
    "About Me",
    "Contact"
];
</script>
