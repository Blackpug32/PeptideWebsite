'use client';

import { useRef, useMemo, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { EffectPoint, ApplicationMethod } from '@/data/peptideEffects';

// === CONSTANTS ===
const GOLD = '#c9a84c';
const DEFAULT_CAMERA = new THREE.Vector3(0, 1.3, 3.8);
const DEFAULT_TARGET = new THREE.Vector3(0, 1.15, 0);

// === BODY SEGMENT DEFINITIONS ===
interface SegmentDef {
  name: string;
  type: 'sphere' | 'cylinder' | 'capsule' | 'box';
  args: number[];
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const BODY_SEGMENTS: SegmentDef[] = [
  // Head
  { name: 'head', type: 'sphere', args: [0.14, 24, 24], position: [0, 2.2, 0] },
  // Neck
  { name: 'neck', type: 'cylinder', args: [0.05, 0.06, 0.12, 12], position: [0, 1.97, 0] },
  // Torso
  { name: 'upperTorso', type: 'cylinder', args: [0.26, 0.22, 0.4, 16], position: [0, 1.68, 0], scale: [1, 1, 0.6] },
  { name: 'lowerTorso', type: 'cylinder', args: [0.22, 0.19, 0.35, 16], position: [0, 1.32, 0], scale: [1, 1, 0.6] },
  { name: 'pelvis', type: 'cylinder', args: [0.19, 0.22, 0.18, 16], position: [0, 1.08, 0], scale: [1, 1, 0.6] },
  // Left arm
  { name: 'leftUpperArm', type: 'capsule', args: [0.045, 0.25, 8, 12], position: [-0.36, 1.62, 0], rotation: [0, 0, 0.18] },
  { name: 'leftForearm', type: 'capsule', args: [0.038, 0.22, 8, 12], position: [-0.44, 1.3, 0], rotation: [0, 0, 0.1] },
  { name: 'leftHand', type: 'sphere', args: [0.038, 12, 12], position: [-0.48, 1.04, 0] },
  // Right arm
  { name: 'rightUpperArm', type: 'capsule', args: [0.045, 0.25, 8, 12], position: [0.36, 1.62, 0], rotation: [0, 0, -0.18] },
  { name: 'rightForearm', type: 'capsule', args: [0.038, 0.22, 8, 12], position: [0.44, 1.3, 0], rotation: [0, 0, -0.1] },
  { name: 'rightHand', type: 'sphere', args: [0.038, 12, 12], position: [0.48, 1.04, 0] },
  // Left leg
  { name: 'leftUpperLeg', type: 'capsule', args: [0.068, 0.32, 8, 12], position: [-0.12, 0.74, 0] },
  { name: 'leftLowerLeg', type: 'capsule', args: [0.05, 0.3, 8, 12], position: [-0.12, 0.35, 0] },
  { name: 'leftFoot', type: 'box', args: [0.06, 0.04, 0.13], position: [-0.12, 0.08, 0.03] },
  // Right leg
  { name: 'rightUpperLeg', type: 'capsule', args: [0.068, 0.32, 8, 12], position: [0.12, 0.74, 0] },
  { name: 'rightLowerLeg', type: 'capsule', args: [0.05, 0.3, 8, 12], position: [0.12, 0.35, 0] },
  { name: 'rightFoot', type: 'box', args: [0.06, 0.04, 0.13], position: [0.12, 0.08, 0.03] },
];

// === BODY PART COMPONENT ===
function BodyPart({ segment, highlighted }: { segment: SegmentDef; highlighted: boolean }) {
  const solidRef = useRef<THREE.Mesh>(null);
  const currentEmissive = useRef(0.05);
  const currentOpacity = useRef(0.12);

  const geometry = useMemo(() => {
    const { type, args } = segment;
    if (type === 'sphere') return new THREE.SphereGeometry(args[0], args[1], args[2]);
    if (type === 'cylinder') return new THREE.CylinderGeometry(args[0], args[1], args[2], args[3]);
    if (type === 'capsule') return new THREE.CapsuleGeometry(args[0], args[1], args[2], args[3]);
    if (type === 'box') return new THREE.BoxGeometry(args[0], args[1], args[2]);
    return new THREE.SphereGeometry(0.1, 16, 16);
  }, [segment]);

  useFrame(() => {
    if (!solidRef.current) return;
    const mat = solidRef.current.material as THREE.MeshPhysicalMaterial;
    const targetE = highlighted ? 0.6 : 0.05;
    const targetO = highlighted ? 0.38 : 0.12;
    currentEmissive.current = THREE.MathUtils.lerp(currentEmissive.current, targetE, 0.06);
    currentOpacity.current = THREE.MathUtils.lerp(currentOpacity.current, targetO, 0.06);
    mat.emissiveIntensity = currentEmissive.current;
    mat.opacity = currentOpacity.current;
  });

  return (
    <group
      position={segment.position}
      rotation={segment.rotation || [0, 0, 0]}
      scale={segment.scale || [1, 1, 1]}
    >
      <mesh ref={solidRef} geometry={geometry}>
        <meshPhysicalMaterial
          color={GOLD}
          transparent
          opacity={0.12}
          emissive={GOLD}
          emissiveIntensity={0.05}
          roughness={0.4}
          metalness={0.7}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color={GOLD}
          transparent
          opacity={0.04}
          wireframe
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// === HUMAN BODY ===
function HumanBody({ highlightedSegments }: { highlightedSegments: string[] }) {
  return (
    <group>
      {BODY_SEGMENTS.map((seg) => (
        <BodyPart
          key={seg.name}
          segment={seg}
          highlighted={highlightedSegments.includes(seg.name)}
        />
      ))}
    </group>
  );
}

// === EFFECT MARKER (pulsing glow orb) ===
function EffectMarker({
  position,
  color,
  isSelected,
  onClick,
}: {
  position: [number, number, number];
  color: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const currentScale = useRef(1);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 3) * 0.2;
    const targetScale = isSelected ? 1.6 : 1;
    currentScale.current = THREE.MathUtils.lerp(currentScale.current, targetScale, 0.08);
    const s = pulse * currentScale.current;

    if (innerRef.current) innerRef.current.scale.setScalar(s);
    if (outerRef.current) {
      outerRef.current.scale.setScalar(s * 1.8);
      (outerRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.12 + Math.sin(t * 2) * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
      ringRef.current.scale.setScalar(currentScale.current);
    }
  });

  return (
    <group position={position} onClick={(e) => { e.stopPropagation(); onClick(); }}>
      {/* Inner core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} depthWrite={false} />
      </mesh>
      {/* Outer glow */}
      <mesh ref={outerRef}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} depthWrite={false} />
      </mesh>
      {/* Rotating ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.055, 0.07, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      {/* Second ring (perpendicular) */}
      {isSelected && (
        <mesh rotation={[0, 0, 0]}>
          <ringGeometry args={[0.065, 0.078, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      )}
      {/* Hitbox for easier clicking */}
      <mesh visible={false}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  );
}

// === APPLICATION MARKER (crosshair target) ===
function ApplicationMarker({
  position,
  isPrimary,
}: {
  position: [number, number, number];
  isPrimary: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const color = isPrimary ? GOLD : '#7d9a7a';

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.1;
      groupRef.current.scale.setScalar(scale);
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Center dot */}
      <mesh>
        <sphereGeometry args={[0.018, 12, 12]} />
        <meshBasicMaterial color={color} depthWrite={false} />
      </mesh>
      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.035, 0.048, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.7} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      {/* Outer ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.06, 0.07, 4]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      {/* Cross lines */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.14, 0.004]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <planeGeometry args={[0.14, 0.004]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
    </group>
  );
}

// === CAMERA ANIMATOR ===
function CameraAnimator({
  targetPos,
  cameraPos,
  controlsRef,
}: {
  targetPos: THREE.Vector3;
  cameraPos: THREE.Vector3;
  controlsRef: React.RefObject<any>;
}) {
  const { camera } = useThree();

  useFrame(() => {
    if (!controlsRef.current) return;
    camera.position.lerp(cameraPos, 0.035);
    controlsRef.current.target.lerp(targetPos, 0.035);
    controlsRef.current.update();
  });

  return null;
}

// === GROUND PLATFORM ===
function GroundPlatform() {
  return (
    <group position={[0, 0.02, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.8, 64]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.03} depthWrite={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.78, 0.8, 64]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.1} depthWrite={false} />
      </mesh>
    </group>
  );
}

// === SCENE CONTENT ===
interface SceneProps {
  mode: 'effects' | 'application';
  effects: EffectPoint[];
  methods: ApplicationMethod[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  activeMethodId: string | null;
}

function SceneContent({ mode, effects, methods, selectedId, onSelect, activeMethodId }: SceneProps) {
  const controlsRef = useRef<any>(null);

  // Calculate highlighted segments
  const highlightedSegments = useMemo(() => {
    if (mode === 'effects') {
      if (!selectedId) return [];
      const effect = effects.find((e) => e.id === selectedId);
      return effect?.segments || [];
    }
    if (mode === 'application') {
      const method = methods.find((m) => m.id === activeMethodId);
      return method?.segments || [];
    }
    return [];
  }, [mode, selectedId, activeMethodId, effects, methods]);

  // Calculate camera targets
  const { camTarget, camPosition } = useMemo(() => {
    if (mode === 'effects' && selectedId) {
      const effect = effects.find((e) => e.id === selectedId);
      if (effect) {
        const t = new THREE.Vector3(...effect.position);
        const p = new THREE.Vector3(
          effect.position[0] + effect.cameraOffset[0],
          effect.position[1] + effect.cameraOffset[1],
          effect.position[2] + effect.cameraOffset[2]
        );
        return { camTarget: t, camPosition: p };
      }
    }
    if (mode === 'application' && activeMethodId) {
      const method = methods.find((m) => m.id === activeMethodId);
      if (method && method.positions.length > 0) {
        // Center on the first position
        const center = method.positions[0];
        const t = new THREE.Vector3(...center);
        const p = new THREE.Vector3(
          center[0] + method.cameraOffset[0],
          center[1] + method.cameraOffset[1],
          center[2] + method.cameraOffset[2]
        );
        return { camTarget: t, camPosition: p };
      }
    }
    return { camTarget: DEFAULT_TARGET.clone(), camPosition: DEFAULT_CAMERA.clone() };
  }, [mode, selectedId, activeMethodId, effects, methods]);

  const handleEffectClick = useCallback(
    (id: string) => {
      onSelect(selectedId === id ? null : id);
    },
    [selectedId, onSelect]
  );

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 4, 3]} intensity={0.6} color="#f0ede8" />
      <pointLight position={[-3, 2, -3]} intensity={0.3} color={GOLD} />
      <pointLight position={[0, -1, 2]} intensity={0.15} color="#7d9a7a" />

      {/* Body */}
      <HumanBody highlightedSegments={highlightedSegments} />

      {/* Ground */}
      <GroundPlatform />

      {/* Effect markers */}
      {mode === 'effects' &&
        effects.map((effect) => (
          <EffectMarker
            key={effect.id}
            position={effect.position}
            color={effect.color}
            isSelected={selectedId === effect.id}
            onClick={() => handleEffectClick(effect.id)}
          />
        ))}

      {/* Application markers */}
      {mode === 'application' &&
        activeMethodId &&
        methods
          .filter((m) => m.id === activeMethodId)
          .flatMap((m) =>
            m.positions.map((pos, i) => (
              <ApplicationMarker
                key={`${m.id}-${i}`}
                position={pos}
                isPrimary={m.isPrimary}
              />
            ))
          )}

      {/* Camera animation */}
      <CameraAnimator targetPos={camTarget} cameraPos={camPosition} controlsRef={controlsRef} />

      {/* Orbit controls */}
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        minDistance={1.5}
        maxDistance={6}
        autoRotate={!selectedId && mode === 'effects'}
        autoRotateSpeed={0.4}
        target={DEFAULT_TARGET.toArray() as [number, number, number]}
        enableDamping
        dampingFactor={0.08}
      />
    </>
  );
}

// === MAIN CANVAS EXPORT ===
export default function BodySceneCanvas(props: SceneProps) {
  return (
    <Canvas
      camera={{ position: DEFAULT_CAMERA.toArray() as [number, number, number], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      onPointerMissed={() => props.onSelect(null)}
    >
      <SceneContent {...props} />
    </Canvas>
  );
}
