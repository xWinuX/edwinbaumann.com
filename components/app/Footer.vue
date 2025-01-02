<template>
  <footer class="mb-5 w-full overflow-x-clip text-center">
    <div class="duration-1000 animate-in fade-in">
      <BaseWrapper class="overflow-clip duration-1000 animate-in slide-in-from-bottom-5">
        <div class="m-auto h-full w-full overflow-clip text-center">
          <BaseGradientLine />
          <div class="relative pt-5 z-10">
            <p>
              <b>
                <span class="inline-block">Edwin Baumann&nbsp;</span>
                <span class="inline-block">2022 - {{ year }}</span>
              </b>
            </p>
            <div class="sm:absolute sm:right-0 sm:top-0 sm:pt-5 pt-1 sm:w-auto w-full  mx-auto">
              <AppLanguageSelection />
            </div>
          </div>
        </div>
      </BaseWrapper>
    </div>
  </footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear();
</script>
