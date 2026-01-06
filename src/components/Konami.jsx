import { useEffect, useRef } from "react";

const useKonamiCode = (onActivate, currentMode) => {
  const konamiIndexRef = useRef(0);

  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
      "Enter",
    ];

    const handleKeyDown = (e) => {
      let key = e.key;

      if (key === "ㅠ") key = "b";
      if (key === "ㅁ") key = "a";

      const expectedKey = konamiCode[konamiIndexRef.current];

      if (
        key === expectedKey ||
        (expectedKey && key.toLowerCase() === expectedKey.toLowerCase())
      ) {
        konamiIndexRef.current++;

        if (konamiIndexRef.current === konamiCode.length) {
          console.log(
            currentMode
              ? "강의 모드로 전환합니다."
              : "강의 샘플 모드로 전환합니다."
          );
          onActivate();
          konamiIndexRef.current = 0;
          e.preventDefault();
        }
      } else {
        konamiIndexRef.current = 0;

        if (
          key === konamiCode[0] ||
          (key && key.toLowerCase() === konamiCode[0].toLowerCase())
        ) {
          konamiIndexRef.current = 1;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onActivate, currentMode]);
};

export default useKonamiCode;
