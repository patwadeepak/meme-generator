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
  if (imageRef && imageRef.current) {
    imageRef.current.crossOrigin = "anonymous";
    ctx.drawImage(imageRef.current, 0, 0);
    ctx.save();
  }
};

// draw Meme Text
export const setMemeText = (ctx, imageRef, text, positionBottom) => {
  if (imageRef && imageRef.current) {
    ctx.font = "bold 40px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      text,
      imageRef.current.width / 2,
      positionBottom ? imageRef.current.height - 50 : 50
    );
    ctx.save();
  }
};
