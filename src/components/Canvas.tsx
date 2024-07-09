import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Canvas({ isCube, isTorus, isDodecahedron, cubeSpeed, torusSpeed, dodecahedronSpeed}: any) {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {  
        console.log({cubeSpeed, torusSpeed, dodecahedronSpeed});
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
        const boxGeometry = new THREE.BoxGeometry();
        const cube = new THREE.Mesh(boxGeometry, material);
        cube.position.x = -2;
        scene.add(cube);
        
        // creating torus
        const torusGeometry = new THREE.TorusGeometry( 0.5, 0.2, 10, 40 )
        const torus = new THREE.Mesh(torusGeometry, material);
        scene.add(torus);
        
        // Creating large cube
        const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.5,0);
        const dodecahedron = new THREE.Mesh(dodecahedronGeometry, material);
        dodecahedron.position.x = 2;
        scene.add(dodecahedron);
    
        // Position the camera
        camera.position.z = 3;
    
        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.visible = isCube;
            torus.visible = isTorus;
            dodecahedron.visible = isDodecahedron;

            cube.rotation.x += parseFloat(cubeSpeed);
            cube.rotation.y += parseFloat(cubeSpeed);
            torus.rotation.x += parseFloat(torusSpeed);
            torus.rotation.y += parseFloat(torusSpeed);
            dodecahedron.rotation.x += parseFloat(dodecahedronSpeed);
            dodecahedron.rotation.y += parseFloat(dodecahedronSpeed);
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
    }, [isCube, isTorus, isDodecahedron, cubeSpeed, torusSpeed, dodecahedronSpeed]);
  
    return <div ref={mountRef} />;
}