import { useConfiguratorStore } from "../../store/useConfiguratorStore";

export default function ShelfControls() {
  const shelfCount = useConfiguratorStore((s) => s.shelfCount);
  const setShelfCount = useConfiguratorStore((s) => s.setShelfCount);

  return (
    <div>
      <label className="text-sm">Shelf Count</label>
      <input
        type="number"
        min="0"
        max="10"
        value={shelfCount}
        onChange={(e) => setShelfCount(Number(e.target.value))}
        className="w-full p-2 bg-neutral-700 rounded"
      />
    </div>
  );
}
