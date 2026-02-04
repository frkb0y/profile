import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF(
    require("../../Assets/Projects/Flower Skull - turntable test .glb")
  );

  return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />;
}

function ModelViewer() {
  return (
    <div className="home-hero-canvas">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default ModelViewer;
