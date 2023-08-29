<template>
  <div class="project-box">
    <Suspense>
      <TresCanvas alpha shadows>
        <TresPerspectiveCamera :position="[0, 1, -3]" />
        <OrbitControls
          :auto-rotate="true"
          :enable-pan="false"
          :enable-zoom="false"
          :auto-rotate-speed="2"
        />
        <TresAmbientLight :intensity="0.5" />
        <Suspense>
          <GLTFModel :position="[0, -1.0, 0]" path="/TimeWizard.glb" />
        </Suspense>
      </TresCanvas>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
const { onLoop, resume } = useRenderLoop();
</script>

<style scoped>

.project-box {
    width: 350px;
    height: 350px;
    margin: 0 0 50px 0;

    -webkit-border-radius: 0 80px 0 80px;
    -moz-border-radius: 0 80px 0 80px;
    -ms-border-radius: 0 80px 0 80px;
    -o-border-radius: 0 80px 0 80px;
}

</style>