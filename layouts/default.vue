<template>
  <div class="m-auto flex h-screen flex-col justify-between ">
    <div class="relative w-full p-5 overflow-x-clip animate-in fade-in duration-1000">
      <AppGradientBackdrop class="" />
      <AppWrapper class="m-auto grid grid-cols-1 gap-4 lg:flex">
        <AppHeader />
        <AppNavbar />
      </AppWrapper>
    </div>
    <main>
      <AppWrapper>
        <slot />
      </AppWrapper>
    </main>
    <AppFooter />
  </div>
</template>
