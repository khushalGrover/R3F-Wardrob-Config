import { useConfiguratorStore } from "../../store/useConfiguratorStore";

const materials = [
  { name: "Plywood", costPerSqFt: 85, color: "#d2b48c" },
  { name: "MDF", costPerSqFt: 65, color: "#c2b280" },
];

export default function MaterialControls() {
  const setMaterial = useConfiguratorStore((s) => s.setMaterial);

  return (
    <div>
      <label className="text-sm">Material</label>
      <select
        onChange={(e) =>
          setMaterial(materials.find((m) => m.name === e.target.value))
        }
        className="w-full p-2 bg-neutral-700 rounded"
      >
        {materials.map((mat) => (
          <option key={mat.name} value={mat.name}>
            {mat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
