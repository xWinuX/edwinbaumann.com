<template>
  <!--div class="project-box">
    <Suspense>
      <TresCanvas alpha shadows>
        <TresPerspectiveCamera :position="new Vector3(0, 1, -3)" />
        <OrbitControls
          :auto-rotate="true"
          :enable-pan="false"
          :enable-zoom="false"
          :auto-rotate-speed="2"
        />
        <TresAmbientLight :intensity="0.5" />
        <Suspense>
          <GLTFModel :position="new Vector3(0, -1.0, 0)" path="/TimeWizard.glb" />
        </Suspense>
      </TresCanvas>
    </Suspense>
  </div-->


  <section>
    <h3>Time Wizard</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim et metus blandit auctor ac vitae justo. Praesent dui purus, lacinia quis ultrices vel, vulputate ac nibh. Quisque tincidunt nisi accumsan diam pretium, quis imperdiet nisi maximus. Proin ut est odio. Integer ut auctor eros, ac dictum ante. Aenean luctus, urna eget sagittis vehicula, turpis nisi congue quam, eget semper leo quam a elit. Cras lacinia euismod lectus, id egestas diam efficitur in. Nullam ultrices pellentesque congue. Mauris risus sapien, gravida vitae ipsum non, fringilla lobortis felis. Donec ultricies, ex suscipit euismod consequat, velit dolor facilisis elit, id tincidunt elit sapien ac felis. Praesent sagittis congue pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </p>
  </section>


</template>

<script setup lang="ts">
import { Vector3 } from "three";

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
