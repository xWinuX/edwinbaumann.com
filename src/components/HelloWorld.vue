<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="grid h-screen place-items-center">
    <div class="h-auto">
      <h1 class="text-2xl mb-5 border-2 p-2">{{ msg }}</h1>
      <div class="text-center">
        <button class="border-2 rounded p-2 drop-shadow-lg" type="button" @click="count++">count is {{ count }}</button>
      </div>
    </div>
  </div>
</template>

