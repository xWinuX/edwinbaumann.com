<template>
    <nav class="pt-5 pb-5 w-full relative overflow-x-clip">

        <!-- Background -->
        <!--div class="absolute top-0 left-0 w-full h-full from-emerald-400 to-blue-600 bg-gradient-to-r animate-slideInDown "/-->
        <div class="
            transition opacity-50 gradient
            before:content-[''] before:-z-10 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:blur-2xl before:transform before:transform before:-translate-y-0.5 before:scale-110 before:bg-gradient-to-r before:from-emerald-400 before:to-blue-600
            after:content-[''] after:-z-10 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-inherit
            animate-fadeIn
        "/>

        <div class="w-5/6 h-full m-auto">
            <!-- Desktop NavBar -->
            <ul class="gap-10 grid-cols-4 hidden w-full m-auto sm:grid">
                <NavBarElements/>
            </ul>

            <!-- Mobile NavBar -->
            <ul class="grid-cols-1 grid w-full h-full m-auto sm:hidden">
                <li class="animate-zoomIn">
                    <NavBarElement class="p-0">
                        <button @click="onMenuClick" class="w-full h-full p-3">
                            <svg class="fill-white m-auto p-0" width="20px" height="20px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zm0 5H1a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2z"/>
                            </svg>
                        </button>
                    </NavBarElement>
                </li>
                <NavBarElements v-if="menuOpen"/>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Ref, ref }   from "vue";
import NavBarElements from "./NavBarElements.vue";
import NavBarElement  from "./NavBarElement.vue";

const menuOpen: Ref<boolean> = ref(true);

function onMenuClick() {
    menuOpen.value = !menuOpen.value
}
</script>