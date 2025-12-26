import React from "react";

const Attachment = ({ title = "첨부파일", items = [] }) => {
  const getFileName = (src) => {
    return src.split("/").pop();
  };

  const downloadAllItems = async () => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const fileName = getFileName(item.src);
      try {
        const response = await fetch(item.src);
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

  return (
    <div style={{ marginTop: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h4 style={{ margin: 0 }}>{title}</h4>
        <button
          onClick={downloadAllItems}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4675c0",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          모두 다운로드
        </button>
      </div>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {items.map((item) => (
          <div key={item.src} style={{ textAlign: "center" }}>
            <div
              style={{
                width: "150px",
                marginBottom: "0.5rem",
                backgroundImage:
                  "linear-gradient(45deg, #666 25%, transparent 25%, transparent 75%, #666 75%, #666), linear-gradient(45deg, #666 25%, transparent 25%, transparent 75%, #666 75%, #666)",
                backgroundPosition: "0 0, 10px 10px",
                backgroundSize: "20px 20px",
                backgroundColor: "#888",
                display: "inline-block",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <a
              href={item.src}
              download={getFileName(item.src)}
              style={{
                display: "block",
                marginTop: "0.5rem",
                color: "#4675c0",
              }}
            >
              {item.alt} 다운로드
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachment;
