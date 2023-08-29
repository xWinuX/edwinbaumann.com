<template>
  <li
    v-for="(element, index) in navElements"
    :key="index"
    :class="'animate-in fill-mode-backwards fade-in slide-in-from-top duration-100 sm:slide-in-from-bottom lg:slide-in-from-top sm:duration-1000 ' + slideInAnimationDelayClasses[index]"
  >
    <NuxtLink :href="navElementLinks[index]">
      <AppNavbarElement>
        <p class="text-zinc-100 group-hover:text-zinc-50">
          <b>{{ element }}</b>
        </p>
      </AppNavbarElement>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const navElements: string[] = [
    "Home",
    "Projects",
    "About Me",
    "Contact",
];

const navElementLinks: string[] = [
    "/",
    "/projects",
    "/about-me",
    "/contact",
];

const slideInAnimationDelayClasses: string[] = [
    "delay-75 sm:delay-75",
    "delay-100 sm:delay-200",
    "delay-150 sm:delay-500",
    "delay-200 sm:delay-700",
];

const fadeInAnimationDelayClasses: string[] = [
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
];
</script>
