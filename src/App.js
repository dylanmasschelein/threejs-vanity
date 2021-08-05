import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Vanity from "./components/Vanity/Vanity";
import Shower from "./components/Shower/Shower";
import Floor from "./components/General/Floor";
import { Suspense } from "react";
import Walls from "./components/General/Walls";

const App = () => {
  return (
    <div className='App'>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <pointLight intensity={1.12} position={[0, 0, 0]} />
        <Suspense fallback={null}>
          <Floor />
          <Walls />
        </Suspense>
        <Vanity />
        <Shower />
      </Canvas>
    </div>
  );
};

export default App;
