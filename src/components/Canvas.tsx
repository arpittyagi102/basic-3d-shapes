import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Canvas({ isLargeCube, isTorus, isSmallCube, largeCubeSpeed, torusSpeed, smallCubeSpeed}) {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {  
        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef?.current?.appendChild(renderer.domElement);

        // adding lights
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 1);
        scene.add(light);
    
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

        // Creating large cube
        const largeBoxGeometry = new THREE.BoxGeometry();
        const largeCube = new THREE.Mesh(largeBoxGeometry, material);
        largeCube.position.x = -2;
        scene.add(largeCube);
        
        // creating torus
        const torusGeometry = new THREE.TorusGeometry( 0.5, 0.2, 10, 40 )
        const torus = new THREE.Mesh(torusGeometry, material);
        scene.add(torus);
        
        // Creating large cube
        const smallBoxGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const smallCube = new THREE.Mesh(smallBoxGeometry, material);
        smallCube.position.x = 2;
        scene.add(smallCube);
    
        // Position the camera
        camera.position.z = 5;
    
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            largeCube.visible = isLargeCube;
            torus.visible = isTorus;
            smallCube.visible = isSmallCube;

            largeCube.rotation.x += 0.01;
            largeCube.rotation.y += 0.01;
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            smallCube.rotation.x += 0.01;
            smallCube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    
        // Clean up on component unmount
        return () => {
            if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [isLargeCube, isTorus, isSmallCube, largeCubeSpeed, torusSpeed, smallCubeSpeed]);
  
    return <div ref={mountRef} />;
}