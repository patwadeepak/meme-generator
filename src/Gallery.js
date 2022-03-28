import React, { useEffect, useState } from "react";
import memes from "./memeFileNames.json";
import ImageRenderer from "./ImageRenderer";

const Gallery = ({ style, setImageRef, searchText }) => {
  const [memesFiltered, setMemesFiltered] = useState(memes);
  useEffect(() => {
    setMemesFiltered(memes.filter((item) => item.includes(searchText)));
  }, [searchText]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className={style}>
      {memesFiltered.map((fileName, index) => (
        <ImageRenderer
          key={index}
          url={
            "https://raw.githubusercontent.com/patwadeepak/meme-generator/main/docs/static/memes/" +
            fileName
          }
          alt={fileName}
          setImageRef={setImageRef}
          imageLabel={fileName.split(".")[0].replaceAll(/[-_]/g, " ")}
        />
      ))}
    </div>
  );
};

export default Gallery;
