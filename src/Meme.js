import React, { useCallback, useEffect, useRef } from "react";
import { setMemeImage } from "./drawAndDownload";
import ReImg from "./reimg";
// import memeImage from "./memes/all_the_things_sad.jpg";

const Meme = ({ topText, bottomText, image }) => {
  const canvasRef = useRef();
  const sampleRef = useRef();
  const draw = useCallback(() => {
    const canvas = canvasRef && canvasRef.current;
    const ctx = canvas.getContext("2d");
    // setMemeImage(ctx, memeImage, sampleRef.current);
  }, [canvasRef]);

  useEffect(() => {
    draw();
  }, [topText, bottomText, draw]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={image.width}
        height={image.height}
      ></canvas>
      <div ref={sampleRef}></div>
      <button
        onClick={() =>
          canvasRef &&
          canvasRef.current &&
          ReImg.fromCanvas(canvasRef.current).downloadPng()
        }
      >
        Download Meme
      </button>
    </>
  );
};

export default Meme;
