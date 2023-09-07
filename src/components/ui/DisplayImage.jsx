import React from "react";

function DisplayImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-[100px] h-[100px] object-cover rounded-full`}
    />
  );
}

export default DisplayImage;
