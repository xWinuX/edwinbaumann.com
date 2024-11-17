<template>
  <li
    v-for="(element, index) in navElements"
    :key="index"
    :class="'animate-in fill-mode-backwards fade-in slide-in-from-top duration-100 sm:slide-in-from-bottom lg:slide-in-from-top sm:duration-1000 ' + slideInAnimationDelayClasses[index]"
  >
    <NuxtLink :href="navElementLinks[index]">
      <AppNavigationElement>
        <p class="text-zinc-100 group-hover:text-zinc-50">
          <b>{{ $t(element) }}</b>
        </p>
      </AppNavigationElement>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">

const { t } = useI18n();

const navElements: string[] = [
    "navbar.aboutMe",
    "navbar.projects",
    "navbar.contact",
];

const navElementLinks: string[] = [
    "/",
    "/projects",
    "/contact",
];

const slideInAnimationDelayClasses: string[] = [
    "delay-75 sm:delay-75",
    "delay-100 sm:delay-200",
    "delay-150 sm:delay-500",
];

const fadeInAnimationDelayClasses: string[] = [
    "delay-100",
    "delay-200",
    "delay-300",
];
</script>
