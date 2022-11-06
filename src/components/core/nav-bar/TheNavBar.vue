<template>
    <div class="relative w-full p-5 grid grid-cols-1 gap-4 lg:flex">
        <!-- Background -->
        <div class="
            transition opacity-50 gradient -z-10
            before:content-[''] before:-z-10 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:blur-2xl before:transform before:transform before:scale-110 before:bg-gradient-to-r before:from-emerald-400 before:to-blue-600
            after:content-[''] after:-z-10 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-inherit
            animate-fadeIn
        "></div>
        
        <!-- Logo -->
        <div class="z-10 pr-3 animate-slideInDown lg:animate-slideInLeft m-auto mb-5 lg:w-2/6 lg:flex-1">
            <div class="animate-fadeIn">
                <img class="float-left" src="src/assets/images/edwin-baumann-logo.svg" alt="Edwin Baumann Logo" width="64" height="64"/>
                <div class="float-left ml-5">
                    <h1>
                        Edwin Baumann
                        <span class="block text-sm">Game Developer</span>
                        <span class="block text-sm">Programming</span>
                    </h1>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="z-10 lg:w-4/6 lg:flex-none">
            <div class="m-auto h-full w-full">
                <!-- Desktop NavBar -->
                <ul class="m-auto hidden w-full grid-cols-4 gap-10 sm:grid">
                    <NavBarElements/>
                </ul>

                <!-- Mobile NavBar -->
                <ul class="m-auto grid h-full grid-cols-1 sm:hidden">
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
            </div>
        </nav>

    </div>
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