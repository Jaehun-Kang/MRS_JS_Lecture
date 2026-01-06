import FoldableSection from "./Foldable";

const ListManager = ({ items, onSelect, selectedIdx, isLecturerMode }) => {
  const level1 = items.filter((item) => item.level === 1);
  const level2 = items.filter((item) => item.level === 2);
  const level3 = items.filter((item) => item.level === 3);

  const renderItem = (item) => (
    <li
      key={item.idx}
      className={selectedIdx === item.idx ? "selected" : ""}
      onClick={() => onSelect(item.idx)}
      style={{ paddingLeft: "1.5rem" }}
    >
      {item.name}
    </li>
  );

  return (
    <ul className="lesson-list">
      {level1.length > 0 && (
        <li key="level-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <FoldableSection title="Level 1" defaultOpen={false}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {level1.map(renderItem)}
            </ul>
          </FoldableSection>
        </li>
      )}
      {level2.length > 0 && (
        <li key="level-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <FoldableSection title="Level 2" defaultOpen={false}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {level2.map(renderItem)}
            </ul>
          </FoldableSection>
        </li>
      )}
      {level3.length > 0 && (
        <li key="level-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <FoldableSection title="Level 3" defaultOpen={false}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {level3.map(renderItem)}
            </ul>
          </FoldableSection>
        </li>
      )}
    </ul>
  );
};

export default ListManager;
