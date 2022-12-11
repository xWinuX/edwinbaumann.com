<template>

    <div class="flex">
        <div v-for="item in items" class="m-auto border-2">
            <h2> {{ item.name }} </h2>
            <Canvas3D class="w-[50vw] h-[50vh]"></Canvas3D>
        </div>
    </div>
</template>

<script setup lang="ts">

import Canvas3D from "./Canvas3D.vue";

interface Project {
    name: string;
    image: string;
}

const items: Project[] = [
    {
        name: "Time Wizard",
        image: "img",
    },

]

</script>