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

  const attachmentStyles = {
    container: { marginTop: "2rem" },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "1rem",
    },
    title: { margin: 0 },
    downloadAllButton: {
      padding: "0.5rem 1rem",
      backgroundColor: "var(--accent-primary)",
      color: "white",
      border: "none",
      borderRadius: "0.25rem",
      cursor: "pointer",
    },
    itemsContainer: { display: "flex", gap: "2rem", flexWrap: "wrap" },
    itemWrapper: { textAlign: "center" },
    checkboardBg: {
      width: "150px",
      marginBottom: "0.5rem",
      backgroundImage:
        "linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)",
      backgroundPosition: "0 0, 10px 10px",
      backgroundSize: "20px 20px",
      backgroundColor: "#fff",
      display: "inline-block",
    },
    image: { width: "100%", display: "block" },
    downloadLink: {
      display: "block",
      marginTop: "0.5rem",
      color: "var(--accent-primary)",
      textDecoration: "none",
    },
  };

  return (
    <div style={attachmentStyles.container}>
      <div style={attachmentStyles.headerContainer}>
        <h4 style={attachmentStyles.title}>{title}</h4>
        <button
          onClick={downloadAllItems}
          style={attachmentStyles.downloadAllButton}
        >
          모두 다운로드
        </button>
      </div>
      <div style={attachmentStyles.itemsContainer}>
        {items.map((item) => (
          <div key={item.src} style={attachmentStyles.itemWrapper}>
            <div style={attachmentStyles.checkboardBg}>
              <img
                src={item.src}
                alt={item.alt}
                style={attachmentStyles.image}
              />
            </div>
            <a
              href={item.src}
              download={getFileName(item.src)}
              style={attachmentStyles.downloadLink}
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
