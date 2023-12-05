import React from "react";

const ImageComponent = ({ src, alt, className, onClick }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};

export default ImageComponent;
