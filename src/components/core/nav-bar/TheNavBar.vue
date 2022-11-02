<template>
    <nav class="mt-5 w-full">
        <ul class="gap-4 grid-cols-4 hidden w-4/5 m-auto sm:grid">
            <NavBarElements/>
        </ul>
        <ul class="gap-4 grid-cols-1 grid w-4/5 m-auto sm:hidden">
            <li class="animate-zoomIn">
                <button @click="onMenuClick" class="w-full">
                    <NavBarElement>
                        <svg class="fill-white m-auto mt-1" width="36px" height="36px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/>
                        </svg>
                    </NavBarElement>
                </button>
            </li>
            <NavBarElements v-if="menuOpen"/>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { Ref, ref }   from "vue";
import NavBarElements from "./NavBarElements.vue";
import NavBarElement  from "./NavBarElement.vue";

const menuOpen: Ref<boolean> = ref(false);

function onMenuClick() {
    menuOpen.value = !menuOpen.value
}


</script>
