import React from "react";
import memes from "./memeFileNames.json";
import ImageRenderer from "./ImageRenderer";

const Gallery = ({ style, setImageRef }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className={style}>
      {memes.map((fileName, index) => (
        <ImageRenderer
          key={index}
          url={
            "https://raw.githubusercontent.com/patwadeepak/meme-generator/main/docs/static/memes/" +
            fileName
          }
          alt={fileName}
          setImageRef={setImageRef}
        />
      ))}
    </div>
  );
};

export default Gallery;
