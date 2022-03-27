// a.appendChild(document.createElement("canvas"));
// let canvas = document.getElementsByTagName("canvas");
// canvas = canvas[0];
// canvas.width = 800;
// canvas.height = 1200;
// canvas.style.background = "#f8f8f8";
// canvas.style.border = "1px solid black";
// const ctx = canvas.getContext("2d");
// a.appendChild(document.createElement("img"));
// let image = document.getElementsByTagName("img")[0];
// image.src = "https://www.w3schools.com/graphics/pic_the_scream.jpg";
// ctx.drawImage(image, 10, 10);
// ctx.save();
// ctx.strikeStyle = "red";
// ctx.fillStyle = "black";
// ctx.font = "bold 16px Monospace";
// ctx.textAlign = "left";
// ctx.textBaseline = "alphabetic";
// ctx.strokeText("Stroked Text", 50, 250);
// const textWidth = ctx.measureText("Stroked Text").width;
// ctx.fillText("Filled Text", 50 + textWidth + 25, 250);

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
export const setMemeImage = (ctx, imageSrc, sample) => {
  const image = document.createElement("img");
  image.src = imageSrc;
  console.log(image.width, image.height);
  ctx.drawImage(image, 0, 0);
  ctx.save();
  if (sample) {
    sample.appendChild(image);
  }
};
