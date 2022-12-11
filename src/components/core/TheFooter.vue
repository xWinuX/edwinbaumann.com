<template>
    <footer class="text-center w-full sticky pb-3 pt-3 overflow-x-clip">
        <div class="relative w-full p-5 grid grid-cols-1 gap-4 lg:flex animate-fadeIn">
            <AppGradientBackdrop />
            <Wrapper class="animate-slideInUp">
                <div class="text-center m-auto w-full h-full overflow-clip">
                    <AppGradientLine class=" -top-4 w-full sm:left-1/4 sm:w-1/2 h-0.5" />
                    <p class="overflow-clip">Edwin Baumann 2022</p>
                </div>
            </Wrapper>
        </div>
    </footer>
</template>

<script setup lang="ts">
import Wrapper             from "../base/AppWrapper.vue";
import AppGradientLine     from "../base/AppGradientLine.vue";
import AppGradientBackdrop from "../base/AppGradientBackdrop.vue";
</script>