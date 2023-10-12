import React from "react";

import "animate.css";
import "./Module.css";

const Module = ({ children }) => {
  return (
    <div className="animate__animated animate__fadeIn module">{children}</div>
  );
};

export default Module;
