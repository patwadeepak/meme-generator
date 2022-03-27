import React, { useCallback, useEffect, useRef } from "react";
import { setMemeImage, setMemeText } from "./drawAndDownload";

const Meme = ({ topText, bottomText, imageRef, setCanvasRef }) => {
  const canvasRef = useRef();
  const draw = useCallback(() => {
    const canvas = canvasRef && canvasRef.current;
    setCanvasRef(canvasRef);
    const ctx = canvas.getContext("2d");
    setMemeImage(ctx, imageRef);
    setMemeText(ctx, imageRef, topText, false);
    setMemeText(ctx, imageRef, bottomText, true);
  }, [canvasRef, imageRef && imageRef.current]);

  useEffect(() => {
    draw();
  }, [draw, imageRef && imageRef.current]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={(imageRef && imageRef.current.width) || 300}
        height={(imageRef && imageRef.current.height) || 300}
        id="canvas"
      ></canvas>
      <div></div>
    </>
  );
};

export default Meme;
