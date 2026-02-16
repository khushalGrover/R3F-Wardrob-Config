export function calculateCarcass(config) {
  const { width, height, depth, thickness, shelfCount, material } = config;

  const innerWidth = width - thickness * 2;
  const innerHeight = height - thickness * 2;

  const shelves = [];
  const spacing = innerHeight / (shelfCount + 1);

  for (let i = 0; i < shelfCount; i++) {
    shelves.push({
      size: [innerWidth, thickness, depth],
      position: [
        0,
        -height / 2 + thickness + spacing * (i + 1),
        0,
      ],
      color: material.color,
    });
  }

  return {
    left: {
      size: [thickness, height, depth],
      position: [-width / 2 + thickness / 2, 0, 0],
      color: material.color,
    },
    right: {
      size: [thickness, height, depth],
      position: [width / 2 - thickness / 2, 0, 0],
      color: material.color,
    },
    top: {
      size: [innerWidth, thickness, depth],
      position: [0, height / 2 - thickness / 2, 0],
      color: material.color,
    },
    bottom: {
      size: [innerWidth, thickness, depth],
      position: [0, -height / 2 + thickness / 2, 0],
      color: material.color,
    },
    back: {
      size: [width, height, thickness],
      position: [0, 0, -depth / 2 + thickness / 2],
      color: material.color,
    },
    shelves,
  };
}
