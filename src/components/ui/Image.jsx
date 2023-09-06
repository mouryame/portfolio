import React from "react";

function Image({ src, alt, width, height, rounded }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-[${width}] h-[${height}] rounded-${rounded}`}
    />
  );
}

export default Image;
