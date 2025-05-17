import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => {
  // Create a simple fallback mesh in case the model isn't available
  const createFallbackMesh = () => {
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <boxGeometry args={[3, 1.5, 5]} />
        <meshStandardMaterial color="#915EFF" />
      </mesh>
    );
  };

  // Create a car model using primitive shapes
  const createCarMesh = () => {
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />

        {/* Car body */}
        <group position={[0, -1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          {/* Main body */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4, 1, 2]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Roof */}
          <mesh position={[0, 0.75, 0]}>
            <boxGeometry args={[2.5, 0.5, 1.8]} />
            <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Hood */}
          <mesh position={[1.5, -0.1, 0]}>
            <boxGeometry args={[1, 0.4, 1.8]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Trunk */}
          <mesh position={[-1.5, -0.1, 0]}>
            <boxGeometry args={[1, 0.4, 1.8]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Wheels */}
          <mesh position={[1.2, -0.6, 1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          <mesh position={[1.2, -0.6, -1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          <mesh position={[-1.2, -0.6, 1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          <mesh position={[-1.2, -0.6, -1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
            <meshStandardMaterial color="#111111" />
          </mesh>

          {/* Windows */}
          <mesh position={[0.5, 0.75, 0]} rotation={[0, 0, Math.PI / 8]}>
            <boxGeometry args={[0.1, 0.5, 1.7]} />
            <meshStandardMaterial color="#aaddff" metalness={0.9} roughness={0.1} />
          </mesh>

          {/* Headlights */}
          <mesh position={[2, 0, 0.6]}>
            <boxGeometry args={[0.1, 0.3, 0.3]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>

          <mesh position={[2, 0, -0.6]}>
            <boxGeometry args={[0.1, 0.3, 0.3]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </mesh>

          {/* Taillights */}
          <mesh position={[-2, 0, 0.6]}>
            <boxGeometry args={[0.1, 0.3, 0.3]} />
            <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
          </mesh>

          <mesh position={[-2, 0, -0.6]}>
            <boxGeometry args={[0.1, 0.3, 0.3]} />
            <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </mesh>
    );
  };

  try {
    // Try to load the Mercedes S-class model with multiple possible paths
    let modelPath = "./Mercedes_S_class/scene.gltf";
    console.log("Attempting to load 3D model from:", modelPath);

    // Try to load the model, with multiple fallback options
    try {
      var { scene } = useGLTF(
        modelPath,
        undefined,
        (loader) => {
          const dracoLoader = new DRACOLoader();
          loader.setDRACOLoader(dracoLoader);
        }
      );
    } catch (e) {
      // Try alternative file formats
      try {
        modelPath = "./Mercedes_S_class/scene.glb";
        console.log("Attempting to load 3D model from:", modelPath);
        var { scene } = useGLTF(
          modelPath,
          undefined,
          (loader) => {
            const dracoLoader = new DRACOLoader();
            loader.setDRACOLoader(dracoLoader);
          }
        );
      } catch (e2) {
        // Try alternative file names
        try {
          modelPath = "./Mercedes_S_class/car.gltf";
          console.log("Attempting to load 3D model from:", modelPath);
          var { scene } = useGLTF(
            modelPath,
            undefined,
            (loader) => {
              const dracoLoader = new DRACOLoader();
              loader.setDRACOLoader(dracoLoader);
            }
          );
        } catch (e3) {
          // Try alternative file names with glb extension
          try {
            modelPath = "./Mercedes_S_class/car.glb";
            console.log("Attempting to load 3D model from:", modelPath);
            var { scene } = useGLTF(
              modelPath,
              undefined,
              (loader) => {
                const dracoLoader = new DRACOLoader();
                loader.setDRACOLoader(dracoLoader);
              }
            );
          } catch (e4) {
            // Try alternative file names with model extension
            try {
              modelPath = "./Mercedes_S_class/model.gltf";
              console.log("Attempting to load 3D model from:", modelPath);
              var { scene } = useGLTF(
                modelPath,
                undefined,
                (loader) => {
                  const dracoLoader = new DRACOLoader();
                  loader.setDRACOLoader(dracoLoader);
                }
              );
            } catch (e5) {
              // Try one more path format
              try {
                modelPath = "./Mercedes_S_class/index.gltf";
                console.log("Attempting to load 3D model from:", modelPath);
                var { scene } = useGLTF(
                  modelPath,
                  undefined,
                  (loader) => {
                    const dracoLoader = new DRACOLoader();
                    loader.setDRACOLoader(dracoLoader);
                  }
                );
              } catch (e6) {
                // Try with .obj extension
                try {
                  modelPath = "./Mercedes_S_class/scene.obj";
                  console.log("Attempting to load 3D model from:", modelPath);
                  var { scene } = useGLTF(
                    modelPath,
                    undefined,
                    (loader) => {
                      const dracoLoader = new DRACOLoader();
                      loader.setDRACOLoader(dracoLoader);
                    }
                  );
                } catch (e7) {
                  // Final fallback to the original model
                  modelPath = "./desktop_pc/scene.gltf";
                  console.log("Falling back to original model:", modelPath);
                  var { scene } = useGLTF(
                    modelPath,
                    undefined,
                    (loader) => {
                      const dracoLoader = new DRACOLoader();
                      loader.setDRACOLoader(dracoLoader);
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    console.log("Successfully loaded 3D model from:", modelPath);

    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={scene}
          scale={isMobile ? 0.4 : 0.5}
          position={isMobile ? [0, -2, -2.2] : [0, -2.25, -1.5]}
          rotation={[0, Math.PI / 4, 0]}
        />
      </mesh>
    );
  } catch (error) {
    console.error("Error loading 3D model:", error);
    console.log("Using custom car model instead of 3D model");
    return createCarMesh();
  }
};

const MemoizedComputerModel = React.memo(ComputerModel);

// CSS-only fallback car component
const CarFallback = () => {
  return (
    <div className="car-fallback-container">
      <div className="car-fallback">
        <div className="car-body"></div>
        <div className="car-roof"></div>
        <div className="car-window"></div>
        <div className="car-wheel car-wheel-left"></div>
        <div className="car-wheel car-wheel-right"></div>
        <div className="car-light car-light-front"></div>
        <div className="car-light car-light-back"></div>
      </div>
    </div>
  );
};

// Error boundary for Canvas component
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Three.js error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    // Check if WebGL is available
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebGLAvailable(!!gl);
    } catch (e) {
      console.warn('WebGL not available:', e);
      setWebGLAvailable(false);
    }

    // Check mobile device
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // If WebGL is not available, use the CSS fallback
  if (!webGLAvailable) {
    return <CarFallback />;
  }

  // If WebGL is available, try to render the Three.js canvas
  return (
    <CanvasErrorBoundary fallback={<CarFallback />}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        onError={(e) => {
          console.warn('Canvas error:', e);
          setErrorCount(prev => prev + 1);
          if (errorCount > 2) {
            setWebGLAvailable(false);
          }
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            rotateSpeed={1.5}
            autoRotate={true}
            autoRotateSpeed={2.0}
          />
          <MemoizedComputerModel isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </CanvasErrorBoundary>
  );
};

export default ComputersCanvas;
