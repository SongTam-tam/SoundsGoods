import React from "react";
import Mymusic_right from "../../component/mymusic/right/Mymusic_right";
import Mymusic_left from "../../component/mymusic/left/Mymusic_left";
import "./style.scss";

const Mymusic = () => {
  return (
    <div id="mymusic">
      <div className="inner">
        <div className="mymusic">
          <Mymusic_left />
          <Mymusic_right />
        </div>
      </div>
    </div>
  );
};

export default Mymusic;
