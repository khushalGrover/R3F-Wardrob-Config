import { useConfiguratorStore } from "../../store/useConfiguratorStore";

export default function DimensionControls() {
  const {
    width,
    height,
    depth,
    thickness,
    setWidth,
    setHeight,
    setDepth,
    setThickness,
  } = useConfiguratorStore();

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Dimensions (mm)</h3>

      <Slider label="Width" value={width} min={300} max={2000} onChange={setWidth} />
      <Slider label="Height" value={height} min={300} max={2400} onChange={setHeight} />
      <Slider label="Depth" value={depth} min={300} max={1000} onChange={setDepth} />
      <Slider label="Thickness" value={thickness} min={12} max={25} onChange={setThickness} />
    </div>
  );
}

function Slider({ label, value, min, max, onChange }) {
  return (
    <div>
      <label className="text-sm">{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
