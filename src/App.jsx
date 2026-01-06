import { useState } from "react";
import { lessons, samples } from "./components";
import ListManager from "./components/ListManager";
import EasterEgg from "./components/EE";
import useKonamiCode from "./components/Konami";
import "./styles/lesson.css";

function App() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isLecturerMode, setIsLecturerMode] = useState(false);

  useKonamiCode(() => {
    setIsLecturerMode((prev) => !prev);
  }, isLecturerMode);

  const selectedLesson = lessons.find((l) => l.idx === selectedIdx);

  const selectedSample =
    isLecturerMode && selectedIdx
      ? samples.find((s) => s.idx === selectedIdx)
      : null;

  return (
    <div className="app">
      <header className="fixed-header">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <EasterEgg />
          마법연구회 JavaScript 강의
        </h1>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <ListManager
            items={isLecturerMode ? samples : lessons}
            onSelect={setSelectedIdx}
            selectedIdx={selectedIdx}
            isLecturerMode={isLecturerMode}
          />
        </aside>
        <main className="content-area">
          {isLecturerMode ? (
            selectedSample ? (
              selectedSample.content
            ) : (
              <h2 style={{ color: "#555" }}>단원을 선택해주세요</h2>
            )
          ) : selectedLesson ? (
            selectedLesson.content
          ) : (
            <h2 style={{ color: "#555" }}>단원을 선택해주세요</h2>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
