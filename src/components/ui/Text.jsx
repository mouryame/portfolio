import React from "react";

function Text({ children, addClass }) {
  return <p className={`text-lg m-4 !${addClass}`}>{children}</p>;
}

export default Text;
