<template>
    <li
        class="animate-slideInDown"
        :class="slideInAnimationDelayClasses[index]"
        v-for="(element, index) in navElements"
        v-bind:key="index"
    >
        <span
            class="animate-fadeIn animate-normal"
            :class="fadeInAnimationDelayClasses[index]"
        >
            <NavBarElement>
                <p class="text-zinc-100 group-hover:text-zinc-50"><b>{{ element }}</b></p>
            </NavBarElement>
        </span>
    </li>
</template>

<script setup lang="ts">

import NavBarElement from "./NavBarElement.vue";

const navElements: string[] = [
    "Home",
    "Projects",
    "About Me",
    "Contact"
];

const slideInAnimationDelayClasses: string[] = [
    "animate-delay-[200ms]",
    "animate-delay-[400ms]",
    "animate-delay-[600ms]",
    "animate-delay-[800ms]",
];

const fadeInAnimationDelayClasses: string[] = [
    "animate-delay-[100ms]",
    "animate-delay-[200ms]",
    "animate-delay-[300ms]",
    "animate-delay-[400ms]",
];
</script>