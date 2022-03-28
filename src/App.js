import React, { useEffect, useState } from "react";
import { throttle } from "lodash";
import Picker from "./Picker";
import Meme from "./Meme";
import Gallery from "./Gallery";
import Search from "./Search";
import "./App.css";

const App = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageRef, setImageRef] = useState(null);
  const [canvasRef, setCanvasRef] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleSetImageRef = (ref) => {
    setImageRef(ref);
  };

  const handleSearchText = (e) => {
    throttle(setSearchText(e.target.value), 300);
  };

  return (
    <div
      className="App"
      style={{
        gridTemplateRows:
          imageRef && imageRef.current
            ? `${imageRef.current.height}px 1fr`
            : "auto 1fr",
      }}
    >
      <div className="pickerContainer">
        <Picker
          className="pickerContainer"
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          canvasRef={canvasRef}
          imageRef={imageRef}
        />
      </div>
      <div className="canvasContainer">
        <Meme
          topText={topText}
          bottomText={bottomText}
          imageRef={imageRef}
          setCanvasRef={setCanvasRef}
        />
      </div>
      <div className="galleryContainer">
        <div>
          <Search searchText={searchText} setSearchText={handleSearchText} />
        </div>
        <Gallery
          style="gallery"
          setImageRef={handleSetImageRef}
          searchText={searchText}
        />
      </div>
    </div>
  );
};

export default App;
