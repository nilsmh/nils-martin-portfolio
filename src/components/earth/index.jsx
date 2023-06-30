import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, DoubleSide } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';

// Import textures
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import MoonMap from '../../assets/textures/moon-textures.jpeg';

export default function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  const [moonMap] = useLoader(TextureLoader, [MoonMap]);

  const earthRef = useRef();
  const cloudsRef = useRef();
  const moonRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
    moonRef.current.rotation.y = elapsedTime / 6;

    // Calculate the moon's new position
    const angle = elapsedTime / 6; // Controls the speed of the orbit
    const x = 0 + Math.cos(angle) * 3.5;
    const z = 0 + Math.sin(angle) * 3.5;

    // Update the moon's position
    moonRef.current.position.set(-x, 1, z);
  });

  return (
    <>
      {/* Rendering point light on the earth */}
      <pointLight color="#f6f3ea" position={[0.3, 0, 5]} intensity={1.7} />
      {/* Rendering stars in the background */}
      <Stars
        radius={200}
        depth={60}
        count={10000}
        factor={15}
        saturation={0}
        fade={true}
      />
      {/* Rendering sphere with texture of clouds around the earth */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.505, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      {/* Rendering sphere with texture of moon */}
      <mesh ref={moonRef}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial />
        <meshStandardMaterial
          map={moonMap}
          // normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.2}
          panSpeed={0.5}
          rotateSpeed={0.3}
          // target={}
        />
      </mesh>
      {/* Rendering sphere with texture of earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.2}
          panSpeed={0.5}
          rotateSpeed={0.3}
          // target={}
        />
      </mesh>
    </>
  );
}
