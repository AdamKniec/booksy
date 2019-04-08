import React from "react";
import "../styles/app.scss";

const Intro = props => {
  return (
    <div className="intro">
      <h1>{props.appName}</h1>
    </div>
  );
};
export default Intro;
