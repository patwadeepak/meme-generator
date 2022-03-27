import React, { useState, useRef } from "react";
import classnames from "classnames";
import { useIntersection } from "./intersectionObserver";
import "./imageRenderer.css";

const ImageRenderer = ({ url, width, setImageRef }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  const imageRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

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
          onLoad={handleOnLoad}
          width={width}
        />
      )}
    </div>
  );
};

export default ImageRenderer;
