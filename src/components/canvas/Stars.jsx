import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "../../index.css";

const NUM_STARS = 3500; // Increased number of stars for finer effect

const Stars = () => {
  const ref = useRef({
    rotation: { x: 0, y: 0, z: Math.PI / 4 },
  });

  const sphere = random.inSphere(new Float32Array(NUM_STARS * 3), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // Slower, more subtle rotation
    ref.current.rotation.y -= delta / 15; // Slower, more subtle rotation
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#d4af37"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// CSS-only fallback stars background
const StarsFallback = () => {
  return (
    <div className="stars-fallback">
      <div className="stars-fallback-layer stars-small"></div>
      <div className="stars-fallback-layer stars-medium"></div>
      <div className="stars-fallback-layer stars-large"></div>
    </div>
  );
};

const StarsCanvas = () => {
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
  }, []);

  // If WebGL is not available, use the CSS fallback
  if (!webGLAvailable) {
    return <StarsFallback />;
  }

  // If WebGL is available, try to render the Three.js canvas
  return (
    <div className="stars-canvas-container">
      <ErrorBoundary fallback={<StarsFallback />}>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          onError={(e) => {
            console.warn('Canvas error:', e);
            setErrorCount(prev => prev + 1);
            if (errorCount > 2) {
              setWebGLAvailable(false);
            }
          }}
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

// Simple error boundary component
class ErrorBoundary extends React.Component {
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

export default StarsCanvas;
