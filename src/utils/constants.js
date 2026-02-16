import { create } from "zustand"
import { devtools } from "zustand/middleware"

export const useConfiguratorStore = create(
  devtools((set, get) => ({

    // -------------------------
    // BASE DIMENSIONS (mm)
    // -------------------------
    dimensions: {
      width: 900,
      height: 720,
      depth: 560,
      thickness: 18,
    },

    // -------------------------
    // STRUCTURE OPTIONS
    // -------------------------
    structure: {
      shelfCount: 2,
      hasBackPanel: true,
    },

    // -------------------------
    // MATERIAL
    // -------------------------
    material: {
      name: "White Laminate",
      density: 700,     // kg/m3
      pricePerSqft: 85,
    },

    // -------------------------
    // UI STATE
    // -------------------------
    ui: {
      selectedPart: null,
      viewMode: "3D", // 3D | Wireframe | Exploded
    },

    // =========================
    // ACTIONS
    // =========================

    setDimension: (key, value) =>
      set((state) => ({
        dimensions: {
          ...state.dimensions,
          [key]: value,
        },
      })),

    setShelfCount: (count) =>
      set((state) => ({
        structure: {
          ...state.structure,
          shelfCount: count,
        },
      })),

    toggleBackPanel: () =>
      set((state) => ({
        structure: {
          ...state.structure,
          hasBackPanel: !state.structure.hasBackPanel,
        },
      })),

    setMaterial: (material) =>
      set(() => ({ material })),

    setViewMode: (mode) =>
      set((state) => ({
        ui: {
          ...state.ui,
          viewMode: mode,
        },
      })),

  }))
)
