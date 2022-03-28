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
  }, [canvasRef, imageRef && imageRef.current]);

  useEffect(() => {
    draw();
  }, [draw, imageRef && imageRef.current]);

  useEffect(() => {
    if (ctx) {
      setMemeText(ctx, imageRef, topText, false);
    }
  }, [topText]);

  useEffect(() => {
    if (ctx) {
      setMemeText(ctx, imageRef, bottomText, true);
    }
  }, [bottomText]);

  return (
    <canvas
      ref={canvasRef}
      width={(imageRef && imageRef.current.width) || 300}
      height={(imageRef && imageRef.current.height) || 300}
      id="canvas"
    ></canvas>
  );
};

export default Meme;
