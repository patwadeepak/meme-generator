import React, { useState, useRef } from "react";
import classnames from "classnames";
import { useIntersection } from "./intersectionObserver";
import "./imageRenderer.css";

const ImageRenderer = ({ url, width, setImageRef, imageLabel }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  const imageRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  return (
    <div
      className="image-container"
      ref={imgRef}
      style={{ width: 300 }}
      onClick={() => setImageRef(imageRef)}
    >
      {isInView && (
        <img
          ref={imageRef}
          className={classnames("image", !!isLoaded ? "isLoaded" : "")}
          src={url}
          onLoad={() => setIsLoaded(true)}
          width={width || 300}
          crossOrigin="anonymous"
        />
      )}
      <div style={{ textAlign: "center" }}>{imageLabel}</div>
    </div>
  );
};

export default ImageRenderer;
