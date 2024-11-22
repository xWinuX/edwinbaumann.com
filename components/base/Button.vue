<template>
  <button class="w-fit px-4 rounded-xl bg-blue-600">
    <slot />
  </button>
</template>

<style scoped>
button {
  transition: box-shadow 0.25s, scale 0.25s;
}

button:hover {
  scale: 105%;
  box-shadow: 0 0 15px 7px var(--glow-inner-color-faint), 0 0 25px 15px var(--glow-middle-color-faint), 0 0 35px 22px var(--glow-outer-color-faint);
}
</style>
