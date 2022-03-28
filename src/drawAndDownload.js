// set Background color
export const setBackgroundColor = (ctx, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.rect(0, 0, ctx.width, ctx.height);
  ctx.fill();
};

// set border color
export const setBorderColor = (ctx, color) => {
  ctx.strokeStyle = color;
  ctx.rect(0, 0, ctx.width, ctx.height);
  ctx.stroke();
};

// set Meme Image
export const setMemeImage = (ctx, imageRef) => {
  try {
    if (imageRef && imageRef.current) {
      ctx.drawImage(
        imageRef.current,
        0,
        0,
        imageRef.current.width,
        imageRef.current.height,
        0,
        0,
        imageRef.current.width,
        imageRef.current.height
      );
      ctx.save();
    }
  } catch (e) {
    console.error("There was error in selecting meme.", e);
  }
};

// draw Meme Text
export const setMemeText = (ctx, imageRef, text, positionBottom) => {
  try {
    if (imageRef && imageRef.current) {
      ctx.drawImage(
        imageRef.current,
        0,
        0,
        imageRef.current.width,
        imageRef.current.height,
        0,
        0,
        imageRef.current.width,
        imageRef.current.height
      );
      ctx.font = "bold 40px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "black";
      ctx.fillText(
        text,
        imageRef.current.width / 2,
        positionBottom ? imageRef.current.height - 50 : 50
      );
    }
  } catch (e) {
    console.error("There was error in selecting meme.", e);
  }
};
