<template>
  <div class="cursor-pointer bg-opacity-30 text-center transition ease-in-out group hover:scale-105">
    <!-- Content -->
    <slot />

    <div class="relative opacity-0 transition glow group-hover:opacity-20" />

    <!-- Underline -->
    <AppGradientLine class="mt-3 mb-3 transition group-hover:scale-[0.975] group-hover:scale-y-[1.3] sm:m-3" />

    <!-- Background -->
  </div>
</template>
