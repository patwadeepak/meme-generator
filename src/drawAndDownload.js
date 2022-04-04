// set Background color
export const setBackgroundColor = (ctx, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.rect(0, 0, ctx.width, ctx.height);
  ctx.fill();
};

// set border color
export const setBorderColor = (ctx, color) => {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.rect(0, 0, ctx.width, ctx.height);
  ctx.stroke();
  ctx.restore();
};

// set Meme Image
export const setMemeImage = (ctx, imageRef) => {
  try {
    if (imageRef && imageRef.current) {
      ctx.drawImage(
        imageRef.current,
        0,
        0,
        imageRef.current.naturalWidth,
        imageRef.current.naturalHeight,
        0,
        0,
        imageRef.current.width,
        imageRef.current.height
      );
    }
  } catch (e) {
    console.error("There was error in selecting meme.", e);
  }
};

// draw Meme Text
export const setMemeText = (ctx, imageRef, topText, bottomText) => {
  try {
    if (imageRef && imageRef.current) {
      setMemeImage(ctx, imageRef);
      ctx.save();
      ctx.font = "bold 40px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "black";
      ctx.shadowColor = "#FFFFFF";
      ctx.shadowBlur = 3;

      ctx.fillText(topText, imageRef.current.width / 2, 50);
      ctx.fillText(
        bottomText,
        imageRef.current.width / 2,
        imageRef.current.height - 25
      );
      ctx.restore();
    }
  } catch (e) {
    console.error("There was error in selecting meme.", e);
  }
};
