import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cabinet from "../models/Cabinet";
import Lights from "./Lights";

export default function Scene() {
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <Lights />
      <Cabinet />
      <OrbitControls />
    </Canvas>
  );
}
