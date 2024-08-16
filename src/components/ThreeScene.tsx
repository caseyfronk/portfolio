"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { type Mesh } from "three";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
  RoundedBox,
} from "@react-three/drei";
import { useTheme } from "next-themes";
import { useRef } from "react";

export default function ThreeScene() {
  return (
    <Canvas style={{ height: 800 }}>
      <OrbitControls enablePan={false} enableZoom={false} />
      <directionalLight intensity={10} position={[0, 3, 2]} />
      <Environment preset="studio" background={false} />
      <Model />
    </Canvas>
  );
}

function Model() {
  const { theme } = useTheme();
  const { viewport } = useThree();
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.z += 0.003;
    }
  });

  return (
    <group scale={viewport.width / 10}>
      <Text
        color={theme === "dark" ? "white" : "gray"}
        fontSize={1.5}
        font=""
        position={[0, 0, -3]}
      >
        Casey Fronk
      </Text>
      <mesh ref={meshRef}>
        <RoundedBox args={[1, 0.5, 4]}>
          <MeshTransmissionMaterial
            thickness={0.2}
            roughness={0}
            transmission={1}
            ior={2}
            chromaticAberration={0.1}
            backside
          />
        </RoundedBox>
        {/* <Torus args={[1, 0.1, 30]}>
          <MeshTransmissionMaterial
            thickness={0.2}
            roughness={0}
            transmission={1}
            ior={2}
            chromaticAberration={0.1}
            backside
          />
        </Torus> */}
        {/* <Box args={[2, 2, 2]} castShadow receiveShadow>
          <MeshTransmissionMaterial
            thickness={0.2}
            roughness={0}
            transmission={1}
            ior={2}
            chromaticAberration={0.1}
            backside
          />
        </Box> */}
      </mesh>
    </group>
  );
}
