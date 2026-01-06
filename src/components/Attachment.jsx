import React, { useState } from "react";
import "../styles/lesson.css";

const Attachment = ({ title = "첨부파일", items = [] }) => {
  const [failedItems, setFailedItems] = useState(new Set());
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const getFileName = (src, alt) => {
    if (alt && typeof alt === "string") {
      return alt;
    }
    if (!src || typeof src !== "string") return "파일";
    return src.split("/").pop();
  };

  const downloadAllItems = async () => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const fileName = getFileName(item.src, item.alt);
      try {
        const response = await fetch(item.src);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        link.click();

        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error(`Failed to download ${fileName}:`, error);
      }

      if (i < items.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
    }
  };

  const handleImageError = (src) => {
    setFailedItems((prev) => new Set(prev).add(src));
  };

  const validItems = items.filter(
    (item) =>
      item.src && typeof item.src === "string" && !failedItems.has(item.src)
  );

  const hasValidItems = validItems.length > 0;

  return (
    <div className="attachment-container">
      <div className="attachment-header">
        <h4 className="attachment-title">{title}</h4>
        <button
          onClick={downloadAllItems}
          disabled={!hasValidItems}
          className="attachment-download-all"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          모두 다운로드
        </button>
      </div>
      <div className="attachment-items">
        {!hasValidItems ? (
          <p className="attachment-error">파일을 찾을 수 없습니다</p>
        ) : (
          validItems.map((item) => (
            <div key={item.src} className="attachment-item">
              <div className="attachment-checkboard">
                <img
                  src={item.src}
                  alt={item.alt}
                  onError={() => handleImageError(item.src)}
                />
              </div>
              <a
                href={item.src}
                download={getFileName(item.src, item.alt)}
                className="attachment-link"
              >
                {item.alt} 다운로드
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Attachment;
