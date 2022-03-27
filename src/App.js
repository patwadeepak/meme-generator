import React, { useEffect, useState } from "react";
import Picker from "./Picker";
import Meme from "./Meme";
import Gallery from "./Gallery";
import styles from "./App.css";

const App = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState({ width: 0, height: 0, src: null });
  const [image1, setImage1] = useState({ value: null });

  const fetchImage = () => {
    fetch(
      "https://github.com/patwadeepak/meme-generator/blob/main/src/memes/10guy.jpg"
    ).then((image1) => setImage1({ value: image1 }));
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className={styles.App}>
      {<img src={image1.value} alt={"testing"} width="300" />}
      <div className={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          topText={topText}
          setTopText={setTopText}
          bottomText={bottomText}
          setBottomText={setBottomText}
        />
      </div>
      <div className={styles.canvasContainer}>
        <Meme topText={topText} bottomText={bottomText} image={image} />
      </div>
      <div className={styles.galleryContainer}>
        {/* <Gallery style={styles.gallery} setImage={setImage} /> */}
      </div>
    </div>
  );
};

export default App;
