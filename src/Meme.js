import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  setMemeImage,
  setMemeText,
  setBackgroundColor,
} from "./drawAndDownload";

const Meme = ({ topText, bottomText, imageRef, setCanvasRef }) => {
  const [ctx, setCtx] = useState(null);
  const canvasRef = useRef();
  const draw = useCallback(() => {
    const canvas = canvasRef && canvasRef.current;
    setCanvasRef(canvasRef);
    const ctx = canvas.getContext("2d");
    setCtx(ctx);
    setBackgroundColor(ctx, "#FFFFFF");
    setMemeImage(ctx, imageRef);
  }, [canvasRef, imageRef]);

  useEffect(() => {
    draw();
  }, [draw, imageRef]);

  useEffect(() => {
    if (ctx) {
      setMemeText(ctx, imageRef, topText, bottomText);
    }
  }, [topText, bottomText]);

  return (
    <canvas
      ref={canvasRef}
      width={(imageRef && imageRef.current && imageRef.current.width) || 300}
      height={(imageRef && imageRef.current && imageRef.current.height) || 300}
      id="canvas"
      style={
        imageRef &&
        imageRef.current &&
        imageRef.current.width && { padding: "30px" }
      }
    ></canvas>
  );
};

export default Meme;
