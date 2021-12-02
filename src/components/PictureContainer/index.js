import React, { useState } from "react";
import "./style.css"

function PictureContainer({ props }) {

  const { main_img, alt_img} = props;

  const [currentPic, setCurrentPic] = useState(main_img);

  function handleClick(img) {
    setCurrentPic(img)
    // console.log(img, currentPic);
  }

  return (
    <div className="picture-container">
      <img
        src={currentPic}
        className="big-picture"
        alt="main" />
      <div className="small-picture-list">
        {alt_img.map((img, key) => {
          return (
            <img
              src={img}
              className="small-picture"
              alt="alt"
              key={key}
              onClick={() => handleClick(img)} />
          )
        })}
      </div>

    </div>
  )
}

export default PictureContainer