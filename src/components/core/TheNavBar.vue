<template>
  <nav class="mt-5">
    <div class="grid grid-cols-4 gap-4 ">
      <p class="text-center border-2" v-for="number in [0,1,2,3]" v-bind:key="number">
        {{number}}
      </p>
    </div>
  </nav>
</template>
