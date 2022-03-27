import React from "react";
import styles from "./Picker.module.css";

const Picker = ({ topText, setTopText, bottomText, setBottomText }) => {
  return (
    <div className={styles.pickerContainer}>
      <label htmlFor="topText">Text on Top</label>
      <br />
      <input
        type="text"
        name="topText"
        id="topText"
        placeholder="Type here"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="topText">Text on Bottom</label>
      <br />
      <input
        type="text"
        name="bottomText"
        id="bottomText"
        placeholder="Type here"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
    </div>
  );
};

export default Picker;
