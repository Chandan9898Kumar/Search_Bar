import React from "react";

const ImageREnder = ({ item }) => {
  return (
    <>
      <div className="imageRender">
        <img src={item.thumbnail} alt={item.title} loading="lazy"  />
        <p>{item.title}</p>
      </div>
    </>
  );
};
export default ImageREnder;
