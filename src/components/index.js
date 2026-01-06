// components/index.js
const lessonsModules = import.meta.glob("./lessons/*/*.jsx", { eager: true });
const samplesModules = import.meta.glob("./samples/*/*.jsx", { eager: true });

const loadItems = (modules) => {
  return Object.values(modules)
    .map((module) => module.default)
    .filter((item) => item && item.idx !== undefined)
    .sort((a, b) => a.idx - b.idx);
};

export const lessons = loadItems(lessonsModules);
export const samples = loadItems(samplesModules);
