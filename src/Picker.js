import React from "react";
import ReImg from "./reimg";
import styles from "./Picker.module.css";
import { throttle } from "lodash";

const Picker = ({
  topText,
  setTopText,
  bottomText,
  setBottomText,
  canvasRef,
}) => {
  return (
    <div className={styles.pickerContainer}>
      <label htmlFor="topText">Top</label>
      <br />
      <input
        type="text"
        name="topText"
        id="topText"
        placeholder="Enter top text here"
        value={topText}
        onChange={(e) => throttle(setTopText(e.target.value), 300)}
      />
      <br />
      <br />
      <label htmlFor="bottomText">Bottom</label>
      <br />
      <input
        type="text"
        name="bottomText"
        id="bottomText"
        placeholder="Enter bottom text here"
        value={bottomText}
        onChange={(e) => throttle(setBottomText(e.target.value), 300)}
      />
      <br />
      <br />
      <button
        onClick={() => {
          canvasRef &&
            canvasRef.current &&
            ReImg.fromCanvas(canvasRef.current).downloadPng();
        }}
        style={{ padding: "5px" }}
      >
        Download Meme
      </button>
    </div>
  );
};

export default Picker;
