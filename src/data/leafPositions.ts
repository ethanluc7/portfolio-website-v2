export type LeafPosition = {
  start: [number, number];
  upperControl: [number, number];
  tip: [number, number];
  lowerControl: [number, number];
};

// Adjust leaf positions here.
export const mainVineLeafPositions = {
  leaf1: {
    start: [135, 140],
    upperControl: [115, 125],
    tip: [112, 145],
    lowerControl: [122, 150],
  },
  leaf2: {
    start: [125, 250],
    upperControl: [155, 233],
    tip: [159, 256],
    lowerControl: [146, 267],
  },
  leaf3: {
    start: [148, 350],
    upperControl: [123, 340],
    tip: [120, 358],
    lowerControl: [130, 364],
  },
  leaf4: {
    start: [150, 370],
    upperControl: [170, 355],
    tip: [175, 375],
    lowerControl: [165, 382],
  },
  leaf5: {
    start: [175, 460],
    upperControl: [198, 445],
    tip: [205, 468],
    lowerControl: [189, 474],
  },
  leaf6: {
    start: [132, 490],
    upperControl: [109, 475],
    tip: [102, 498],
    lowerControl: [118, 504],
  },
  leaf7: {
    start: [159, 600],
    upperControl: [136, 585],
    tip: [131, 605],
    lowerControl: [141, 612],
  },
  leaf8: {
    start: [184, 500],
    upperControl: [208, 486],
    tip: [216, 506],
    lowerControl: [206, 518],
  },
  leaf9: {
    start: [149, 720],
    upperControl: [124, 700],
    tip: [114, 720],
    lowerControl: [124, 730],
  },
} as const satisfies Record<string, LeafPosition>;

export const smallVineLeafPositions = {
  leaf10: {
    start: [24, 170],
    upperControl: [2, 160],
    tip: [0, 178],
    lowerControl: [10, 182],
  },
  leaf11: {
    start: [42, 255],
    upperControl: [58, 242],
    tip: [60, 260],
    lowerControl: [52, 266],
  },
  leaf12: {
    start: [25, 350],
    upperControl: [5, 340],
    tip: [3, 358],
    lowerControl: [12, 362],
  },
} as const satisfies Record<string, LeafPosition>;

export function buildLeafPath(position: LeafPosition) {
  const [startX, startY] = position.start;
  const [upperControlX, upperControlY] = position.upperControl;
  const [tipX, tipY] = position.tip;
  const [lowerControlX, lowerControlY] = position.lowerControl;

  return `M${startX} ${startY} Q${upperControlX} ${upperControlY} ${tipX} ${tipY} Q${lowerControlX} ${lowerControlY} ${startX} ${startY}`;
}
