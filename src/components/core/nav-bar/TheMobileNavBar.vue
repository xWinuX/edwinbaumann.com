<template>
    <ul class="grid w-full h-full grid-cols-1 sm:hidden">
        <li class="animate-zoomIn">
            <NavBarElement class="p-0">
                <button @click="onMenuClick" class="h-full w-full p-3">
                    <svg class="m-auto fill-white p-0" width="20px" height="20px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/>
                    </svg>
                </button>
            </NavBarElement>
        </li>
        <NavBarElements v-if="menuOpen"/>
    </ul>
</template>

<script setup lang="ts">
import NavBarElements from "./NavBarElements.vue";
import NavBarElement  from "./NavBarElement.vue";
import { ref, Ref }   from "vue";

const menuOpen: Ref<boolean> = ref(false);

function onMenuClick() {
    menuOpen.value = !menuOpen.value
}
</script>