export function calculateSurfaceArea(config) {
  const { width, height, depth, thickness, shelfCount } = config;

  const innerWidth = width - thickness * 2;

  const sideArea = height * depth * 2;
  const topBottomArea = innerWidth * depth * 2;
  const backArea = width * height;
  const shelfArea = innerWidth * depth * shelfCount;

  return sideArea + topBottomArea + backArea + shelfArea;
}

export function mm2ToSqFt(mm2) {
  return mm2 / 92903;
}
