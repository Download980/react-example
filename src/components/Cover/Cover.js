import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="video-container">
      <video className="video"src={coverVideo} autoPlay loop muted  />
      <h2>Name Last Name</h2>
    <p>Developer | Designer | Content web | Enterpeneur | Sofware Enginer </p>
    </div>
  ); 
};

export default Cover;
