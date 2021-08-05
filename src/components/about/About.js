import React from "react";
import pc from "../../media/pc.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          About me About me About me About me About me About me About me About
          me About me About me About me About me About me About me About me
          About me About me About me About me About me About me About me About
          me About me About me About me About me About me About me About me
        </p>
      </div>
      <div className="about-img">
        <img src={pc} alt="About" />
        <img src={pc} alt="About" />
      </div>
    </div>
  );
};

export default About;
