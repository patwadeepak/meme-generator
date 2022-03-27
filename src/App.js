import React, { useEffect, useState } from "react";
import Picker from "./Picker";
import Meme from "./Meme";
import Gallery from "./Gallery";
import "./App.css";

const App = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageRef, setImageRef] = useState(null);
  const [canvasRef, setCanvasRef] = useState(null);

  const handleSetImageRef = (ref) => {
    setImageRef(ref);
  };

  return (
    <div className="App">
      <div className="pickerContainer">
        <Picker
          className="pickerContainer"
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
          canvasRef={canvasRef}
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
        <Gallery style="gallery" setImageRef={handleSetImageRef} />
      </div>
    </div>
  );
};

export default App;
