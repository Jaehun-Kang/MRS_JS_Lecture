// 공통 아이템 로더 함수
export const loadItems = (pattern) => {
  const modules = import.meta.glob(pattern, { eager: true });
  return Object.values(modules)
    .map((module) => module.default)
    .filter((item) => item && item.idx !== undefined)
    .sort((a, b) => a.idx - b.idx);
};
