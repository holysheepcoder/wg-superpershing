import React, { useEffect,useState } from 'react';
import * as THREE from 'three';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './Hero-tank.scss';

export const HeroTank = ({ width, height, className,onTankLoading }) => {
    let entryPoint;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Main
        const mainScene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(width, height);
        renderer.shadowMap.type = THREE.BasicShadowMap;
        renderer.shadowMapWidth = 1024;
        renderer.shadowMapHeight = 1024;
        renderer.shadowMapBias = 0.0039;
        renderer.shadowMapDarkness = 0.5;
        renderer.shadowMap.enabled = true;
        renderer.shadowMapSoft = true;

        entryPoint.appendChild(renderer.domElement);

        //Loaders
        const manager = new THREE.LoadingManager();

        manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
            if(itemsTotal === itemsLoaded){
                setIsLoading(false);
                onTankLoading(false)
            }
        };
        const dracoLoader = new DRACOLoader(manager);
        dracoLoader.setDecoderPath('decoders/');
        dracoLoader.setDecoderConfig({ type: 'js' });

        const gltfLoader = new GLTFLoader(manager);
        gltfLoader.setDRACOLoader(dracoLoader);

        const modelContainer = new THREE.Group();

        gltfLoader.load(
            'models/tank.glb',
            gltf => {
                gltf.scene.lookAt(0.5, 0, -1);
                gltf.scene.castShadow = true;
                modelContainer.add(gltf.scene);
            },
            undefined,
            function(error) {
                console.error(error.message);
            },
        );
        modelContainer.castShadow = true;
        mainScene.add(modelContainer);

        //Camera
        const mainCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 500);
        mainCamera.position.z = 12;
        mainCamera.position.y = 5;

        //Lights
        const backLight = new THREE.PointLight('#ffffff', 10, 20);
        backLight.position.set(3, 5, 10);
        mainScene.add(backLight);

        const fillLight = new THREE.DirectionalLight('#ffffff', 10);
        fillLight.position.set(5, -1, -1);
        mainScene.add(fillLight);

        const orangePointLight = new THREE.PointLight('#ff5722', 10, 50);
        orangePointLight.position.set(0, 5, 0);
        mainScene.add(orangePointLight);

        const light = new THREE.DirectionalLight(0xffffff, 4);
        light.position.set(-10, 10, -10);
        light.target.position.set(0, 0, 0);
        light.castShadow = true;

        light.shadow.camera.near = 3;
        light.shadow.camera.far = 10;
        light.shadow.camera.left = -2;
        light.shadow.camera.right = 2;
        light.shadow.camera.top = 2;
        light.shadow.camera.bottom = -2;

        mainScene.add(light);
        mainScene.add(new THREE.AmbientLight(0x666666));

        //Controls
        const controls = new OrbitControls(mainCamera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        controls.minDistance = 5;
        controls.maxDistance = 22;

        //Helpers
        // const helper = new THREE.CameraHelper(light.shadow.camera);
        // mainScene.add(helper);
        // const axesHelper = new THREE.AxesHelper(5);
        // mainScene.add(axesHelper);

        // Prevent vertical rotation
        controls.maxPolarAngle = Math.PI / 2 - 0.03;

        const resizeRenderer = () => {
            renderer.setSize(width, height);
            //mainCamera.aspect = window.innerWidth / window.innerHeight
            mainCamera.updateProjectionMatrix();
        };

        const animate = () => {
            controls.update();

            requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            mainCamera.lookAt(mainScene.position);

            renderer.render(mainScene, mainCamera);
        };

        window.addEventListener('resize', debounce(resizeRenderer, 50));

        animate();
    }, []);
    return (
        <div className={className} ref={mount => (entryPoint = mount)} />
    );
};

HeroTank.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string,
    onTankLoading: PropTypes.func.isRequired,
};
