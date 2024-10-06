import React from "react";
import Im from "./assets/Image/tealogy-1.png";

import tealogy from "./assets/Image/tealogy-2.png";
function Header() {
  return (
    <>
    <div style={{backgroundColor:"rgb(255, 204, 0)", height:"800px"}}>
      <div className="Round"></div>
      <div className="">
        <img src={Im} alt="" className="Tealogy" />
      </div>
      <div className="tealog">
        <img src={tealogy} alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
      <div className="">
        <h1 className="TeaHad">TEALOGY</h1>
        <h1 className="frenc">FRANCHISE </h1>
      </div>
      </div>
    </>
  );
}

export default Header;
