import { create } from "zustand";
import { calculateSurfaceArea, mm2ToSqFt } from "../utils/pricingEngine";

export const useConfiguratorStore = create((set, get) => ({
  width: 800,
  height: 720,
  depth: 560,
  thickness: 18,
  shelfCount: 2,

  material: {
    name: "Plywood",
    costPerSqFt: 85,
    color: "#d2b48c",
  },

  setWidth: (v) => set({ width: v }),
  setHeight: (v) => set({ height: v }),
  setDepth: (v) => set({ depth: v }),
  setThickness: (v) => set({ thickness: v }),
  setShelfCount: (v) => set({ shelfCount: v }),
  setMaterial: (v) => set({ material: v }),

  calculatePrice: () => {
    const config = get();
    const totalArea = calculateSurfaceArea(config);
    const totalSqFt = mm2ToSqFt(totalArea);
    return Math.round(totalSqFt * config.material.costPerSqFt);
  },
}));
