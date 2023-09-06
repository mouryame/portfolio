import React from "react";

function ViewContainer({ renderedView }) {
  return (
    <div className="grow bg-white text-black-700 m-8 mr-1 rounded-lg p-8">{`ViewContainer-${renderedView}`}</div>
  );
}

export default ViewContainer;
