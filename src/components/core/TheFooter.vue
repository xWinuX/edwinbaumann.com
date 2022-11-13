<template>
    <footer class="text-center w-full sticky pb-3 pt-3 overflow-x-clip">
        <div class="relative w-full p-5 grid grid-cols-1 gap-4 lg:flex animate-fadeIn">
            <!-- Background -->
            <div class="
            transition opacity-50 gradient -z-10
            before:content-[''] before:-z-10 before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:blur-2xl before:transform before:transform before:scale-110 before:bg-gradient-to-r before:from-emerald-400 before:to-blue-600
            after:content-[''] after:-z-10 after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-inherit
            animate-fadeIn"></div>

            <Wrapper class="animate-slideInUp">
                <div class="text-center m-auto w-full h-full overflow-clip">
                    <AppGradientLine class=" -top-4 w-full sm:left-1/4 sm:w-1/2 h-0.5"></AppGradientLine>
                    <p class="overflow-clip">Edwin Baumann 2022</p>
                </div>
            </Wrapper>
        </div>
    </footer>
</template>

<script setup lang="ts">
import Wrapper         from "../base/AppWrapper.vue";
import AppGradientLine from "../base/AppGradientLine.vue";
</script>