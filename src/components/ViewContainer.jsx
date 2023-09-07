import React from "react";
import Overview from "./views/Overview";
import Contact from "./views/Contact";

function ViewContainer({ renderedView }) {
  const views = {
    home: <Overview />,
    contact: <Contact />,
  };
  return (
    <div className="grow bg-white text-black-700 m-8 mr-1 rounded-lg p-8 overflow-auto">
      {views[renderedView]}
    </div>
  );
}

export default ViewContainer;
