"use client"
import { useState } from 'react';
import Canvas from '@/components/Canvas';
import Card from '@/components/Card';

export default function Home() {
  const [isCube, setIsCube] = useState(true);
  const [isTorus, setIsTorus] = useState(true);
  const [isDodecahedron, setIsDodecahedron] = useState(true);

  const [cubeSpeed, setCubeSpeed] = useState(0.01);
  const [torusSpeed, setTorusSpeed] = useState(0.01);
  const [dodecahedronSpeed, setDodecahedronSpeed] = useState(0.01);
  return (
    <div>
      <main className='bg-[#f3f4f6]'>
        <h1 className='text-black p-10 text-lg'>Welcome to Next.js with Three.js</h1>

        <div className='flex w-full justify-center'>
          <Card title="box" toggleVisibiliy={setIsCube} speed={cubeSpeed} setSpeed={setCubeSpeed} />
          <Card title="torus" toggleVisibiliy={setIsTorus} speed={torusSpeed} setSpeed={setTorusSpeed} />
          <Card title="dodecahedron" toggleVisibiliy={setIsDodecahedron} speed={dodecahedronSpeed} setSpeed={setDodecahedronSpeed} />
        </div>

        <Canvas 
          isCube={isCube}
          isTorus={isTorus}
          isDodecahedron={isDodecahedron}
          cubeSpeed={cubeSpeed}
          torusSpeed={torusSpeed}
          dodecahedronSpeed={dodecahedronSpeed}
        />
      </main>
    </div>
  );
};

