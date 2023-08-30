<template>
  <div class="m-auto flex flex-col min-h-[100vh] justify-between">
    <div class="glow opacity-80" />
    <div class="relative w-full overflow-x-clip animate-in fade-in duration-1000">
      <AppHeader />
    </div>
    <main class="flex-grow">
      <AppWrapper>
        <slot />
      </AppWrapper>
    </main>
    <AppFooter />
  </div>
</template>
