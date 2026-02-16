import DimensionControls from "../controls/DimensionControls";
import ShelfControls from "../controls/ShelfControls";
import MaterialControls from "../controls/MaterialControls";
import PricingDisplay from "../controls/PricingDisplay";

export default function Sidebar() {
  return (
    <div className="w-80 p-6 bg-neutral-800 space-y-6 overflow-y-auto">
      <h2 className="text-xl font-semibold">Cabinet Configurator</h2>
      <DimensionControls />
      <ShelfControls />
      <MaterialControls />
      <PricingDisplay />
    </div>
  );
}
