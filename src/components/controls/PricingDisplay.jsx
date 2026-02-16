import { useConfiguratorStore } from "../../store/useConfiguratorStore";

export default function PricingDisplay() {
  const calculatePrice = useConfiguratorStore((s) => s.calculatePrice);
  const price = calculatePrice();

  return (
    <div className="text-lg font-bold">
      Estimated Price: ₹ {price}
    </div>
  );
}
