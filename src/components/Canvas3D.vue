<template>
    <div id="canvas" class="fixed w-full h-full top-0 left-0 pointer-events-none"/>
</template>

<script setup lang="ts">
import * as THREE                    from "three";
import { onMounted, onUpdated, ref } from "vue";
import { GLTFLoader }                from "three/examples/jsm/loaders/GLTFLoader";

onMounted(() => {
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGL1Renderer({alpha: true});

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    renderer.setSize(window.innerWidth, window.innerHeight);

    const canvas = document.querySelector("#canvas");

    canvas.appendChild(renderer.domElement);


    const color     = 0xFFFFFF;
    const intensity = 1;
    const light     = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    let mixer;
    const loader   = new GLTFLoader();
    let theMissing = new THREE.Object3D();
    loader.load("models/TheMissing.glb.gz", (gltf) => {
        mixer        = new THREE.AnimationMixer(gltf.scene);
        const action = mixer.clipAction(gltf.animations[4]);
        action.play();

        theMissing.add(gltf.scene);

        function animate() {
            requestAnimationFrame(animate);
            theMissing.rotation.y = Date.now() * .002;
            theMissing.position.z = Math.sin(Date.now() / 200) * 5;
            mixer.update(0.01);
            renderer.render(scene, camera);
        }

        scene.add(theMissing);

        animate();
    }, null, (error) => {
        console.error(error);
    });


    camera.position.z = 5;


});

</script>
