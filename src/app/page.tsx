"use client"
import { useState } from 'react';
import Canvas from '@/components/Canvas';

export default function Home() {
  const [isLargeCube, setIsLargeCube] = useState(true);
  const [isTorus, setIsTorus] = useState(true);
  const [isSmallCube, setIsSmallCube] = useState(true);

  const [largeCubeSpeed, setLargeCubeSpeed] = useState(0.01);
  const [torusSpeed, setTorusSpeed] = useState(0.01);
  const [smallCubeSpeed, setSmallCubeSpeed] = useState(0.01);
  return (
    <div>
      <main className='bg-[#f3f4f6]'>
        <h1 className='text-black p-10 text-lg'>Welcome to Next.js with Three.js</h1>
        <button className='bg-blue-500 text-white m-5 p-1' onClick={() => setIsLargeCube(!isLargeCube)}>Toggle Large Cube</button>
        <button className='bg-blue-500 text-white m-5 p-1' onClick={() => setIsTorus(!isTorus)}>Toggle Torus</button>
        <button className='bg-blue-500 text-white m-5 p-1' onClick={() => setIsSmallCube(!isSmallCube)}>Toggle Small Cube</button>
        <Canvas 
          isLargeCube={isLargeCube}
          isTorus={isTorus}
          isSmallCube={isSmallCube}
          largeCubeSpeed={largeCubeSpeed}
          torusSpeed={torusSpeed}
          smallCubeSpeed={smallCubeSpeed}
        />
      </main>
    </div>
  );
};

