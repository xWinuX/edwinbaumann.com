<template>
    <div id="canvas"/>
</template>

<script setup lang="ts">
import * as THREE                    from "three";
import { onMounted, onUpdated, ref } from "vue";
import { GLTFLoader }                from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls}               from "three/examples/jsm/controls/OrbitControls";
import { log }                       from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";


function loadTexture(url: string): Promise<THREE.Texture> {
    return new Promise(resolve => {
        new THREE.TextureLoader().load(url, resolve);
    })
}

onMounted(async () => {
    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;
    camera.position.z = 5;



    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;


    const canvas = document.querySelector("#canvas");

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        console.log(canvas.clientWidth)
        console.log(canvas.clientHeight)
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    }

    onWindowResize()


    canvas.appendChild(renderer.domElement);
    
    const orangeColor     = 0xFFA040;
    const directionalLight = new THREE.DirectionalLight(orangeColor, 1);
    directionalLight.castShadow = true;
    directionalLight.position.set(-1, 2, 2);
    
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.blurSamples = 4
    directionalLight.shadow.bias = -0.0004;
    
    const ambientLight = new THREE.AmbientLight(orangeColor, 0.2);


    const loader   = new GLTFLoader();
    let backdrop = new THREE.Object3D();
    
    const playerTexture = await loadTexture('src/assets/models/time-wizard/player.png')
    
    const width = playerTexture.image.width/53;
    const height = playerTexture.image.height/53;
    
    playerTexture.encoding = THREE.sRGBEncoding;
    
    playerTexture.magFilter = THREE.NearestFilter;
    const playerPlane = new THREE.PlaneGeometry(width, height);
    
    const playerMaterial = new THREE.MeshBasicMaterial({map: playerTexture, side: THREE.DoubleSide, alphaTest: 0.5, shadowSide: THREE.FrontSide})
    const playerDepthMaterial = new THREE.MeshDepthMaterial({map: playerTexture, depthPacking: THREE.RGBADepthPacking, alphaTest: 0.5});
    /*const playerMaterial = new THREE.ShaderMaterial(
        {
            uniforms: {
                texture: {
                    value: playerTexture,
                }
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        }
    );*/
    

    
    const playerSprite = new THREE.Mesh(playerPlane, playerMaterial);
    playerSprite.customDepthMaterial = playerDepthMaterial;
    playerSprite.position.y = 0.55;
    
    playerSprite.castShadow = true;
    scene.add(playerSprite);
    scene.add(ambientLight);
    scene.add(directionalLight);
    loader.load("src/assets/models/TimeWizard.glb", (gltf) => {
        gltf.scene.traverse(function (child) {
            if (child.isObject3D) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        backdrop.add(gltf.scene);

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            backdrop.rotation.y = 110;
            renderer.render(scene, camera);
        }

        scene.add(backdrop);

        animate();
    }, null, (error) => {
        console.error(error);
    });


});

</script>
