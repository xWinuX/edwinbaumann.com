<template>
  <div class="m-auto flex flex-col justify-between min-h-[100vh]">
    <div class="opacity-80 glow" />
    <div class="relative w-full overflow-x-clip duration-1000 animate-in fade-in">
      <AppHeader />
    </div>
    <main class="flex-grow">
      <BaseWrapper class="mt-10 mb-10">
        <slot />
      </BaseWrapper>
    </main>
    <AppFooter />
    <div class="opacity-80 glow" />
  </div>
</template>
