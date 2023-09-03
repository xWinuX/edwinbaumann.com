<template>
  <nav class="z-10 m-auto w-full lg:w-4/6 lg:flex-none">
    <ul class="grid w-full rid-cols-1 sm:grid-cols-4">
      <li class="sm:hidden">
        <AppNavigationElement class="mt-3">
          <button class="h-full w-full" @click="onMenuClick">
            <svg class="m-auto fill-white p-0" width="20px" height="20px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z" />
            </svg>
          </button>
        </AppNavigationElement>
      </li>
      <AppNavigationElements v-if="isInDesktopView" />
      <Collapse v-else :when="menuOpen">
        <AppNavigationElements v-if="loaded" />
      </Collapse>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

import { Collapse } from "vue-collapsed";

const menuOpen: Ref<boolean> = ref(false);
const loaded: Ref<boolean> = ref(false);
const isInDesktopView: Ref<boolean> = ref(false);

function onMenuClick() {
    menuOpen.value = !menuOpen.value;
}

function tryForceInactiveMobileNavbar() {
    isInDesktopView.value = window.innerWidth >= 640;

    if (isInDesktopView.value) {
        menuOpen.value = false;
    }
}

onMounted(() => {
    window.addEventListener("resize", tryForceInactiveMobileNavbar);

    tryForceInactiveMobileNavbar();

    loaded.value = true;
});

</script>
