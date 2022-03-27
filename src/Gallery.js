import React from "react";
import memes from "./memeFileNames.json";
import styles from "./Gallery.css";

const Gallery = ({ items = memes }) => {
  return (
    <div className={styles.grid}>
      {/* {items.map((item, index) => {
        import(`./memes/${item}`).then((image) => (
          <img key={index} src={image} alt={item} />
        ));
      })} */}
    </div>
  );
};

export default Gallery;
