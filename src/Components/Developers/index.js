import React from "react";
import profile_icon from "../../assets/profile_icon.png";
import "../Developers/developers.css";

function Developers() {
  return (
    <div className="Meet-Developers-Grid">
      <div className="Developer-01">
        <img id="profile" src={profile_icon} alt="profile pics" />
        <a href="https://github.com/MarilynPapadopoulos">
          Marilyn Papadopoulos
        </a>
      </div>
      <div className="Developer-02">
        <img id="profile" src={profile_icon} alt="profile pics" />
        <a href="https://github.com/ll560">Lisa</a>
      </div>
      <div className="Developer-03">
        <img id="profile" src={profile_icon} alt="profile pics" />
        <a href="https://github.com/ach0319">Ashley Christie</a>
      </div>
    </div>
  );
}

export default Developers;
