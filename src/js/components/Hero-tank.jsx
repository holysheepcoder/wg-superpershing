import React, { useEffect } from 'react';
import * as THREE from 'three'
import { debounce } from 'lodash'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default () => {
    let entryPoint;

    useEffect(() => {
        const mainScene = new THREE.Scene()



        const mainCamera = new THREE.PerspectiveCamera(
            20,
            600 / 500,
            0.1,
            20
        )
        mainCamera.position.z = 10

        // Add Point Lights

        const backLight = new THREE.PointLight(0x00aaff, 3, 20)
        backLight.position.set(-5, 5, -5)
        mainScene.add(backLight)

        const fillLight = new THREE.PointLight(0x00aaff, 0.7, 20)
        fillLight.position.set(-5, 0, 5)
        mainScene.add(fillLight)

        const keyLight = new THREE.PointLight(0xff00ff, 2, 20)
        keyLight.position.set(5, 0, 0)
        mainScene.add(keyLight)

        // Create Renderer

        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(600, 500)

        entryPoint.appendChild(renderer.domElement);

        //Loders


        // draco
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('src/decoders/');
        dracoLoader.setDecoderConfig({ type: 'js' });

        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        const modelContainer = new THREE.Group();
        mainScene.add(modelContainer);

        gltfLoader.load(
            'models/tank.glb',
            gltf => {
                modelContainer.add(gltf.scene)
            },
            undefined,
            function (error) {

                console.error(error.message);

            }
        );



        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshPhongMaterial({ color: 0xffffff })
        const cube = new THREE.Mesh(geometry, material)
        mainScene.add(cube)

        // Handle Window Resize

        // function resizeRenderer() {
        //     //renderer.setSize(600, 500)
        //     mainCamera.aspect = window.innerWidth / window.innerHeight
        //     mainCamera.updateProjectionMatrix()
        // }
        // window.addEventListener('resize', debounce(resizeRenderer, 50))

        // Render Scene

        const clock = new THREE.Clock()

        function render() {
            const delta = clock.getDelta()

            cube.rotation.x += delta * 0.5
            cube.rotation.y += delta * 0.5

            renderer.render(mainScene, mainCamera)

            requestAnimationFrame(render)
        }
        render();
    }, [])
    return (
        <div ref={(mount) => (entryPoint = mount)}></div>
    );
}