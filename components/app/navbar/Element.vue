<template>
  <div class="cursor-pointer rounded-2xl bg-opacity-30 p-3 text-center transition ease-in-out group hover:scale-105">
    <!-- Content -->
    <slot />

    <!-- Underline -->
    <AppGradientLine class="transition group-hover:scale-[0.975] group-hover:scale-y-[2] mt-1" />

    <!-- Background -->
    <div
      class="
            opacity-0 group-hover:opacity-100 pointer-events-none
            before:content-[''] before:-z-10 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:blur-3xl before:bg-gradient-to-r before:from-emerald-400 before:to-blue-600
            after:content-[''] before:-z-10 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-inherit
        "
    />
  </div>
</template>
