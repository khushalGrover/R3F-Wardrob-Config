export default function RightPanel({ data }) {
  return (
    <mesh position={data.position}>
      <boxGeometry args={data.size} />
      <meshStandardMaterial color={data.color} />
    </mesh>
  );
}
