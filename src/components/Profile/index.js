import ProPic from "../../images/propic.png";
import Button from "@mui/material/Button";

import "./style.css";

function Profile() {
  return (
    <div className="container">
      <img id="profile-pic" src={ProPic}></img>
      <h1 id="profile-name">Jeff Cameron</h1>
      <h2 id="profile-bio">
        Hello, my name is Jeff and i am an skier, mountain biker, roller blader
        and general outdoor enthusiast.
      </h2>
      <hr></hr>
      <h3 className="profile-subheader">Activities</h3>
      <p id = "profile-activities">Skiing, Mountain Biking, Roller Blading</p>
      <h3 className="profile-subheader">Certifications</h3>
      <p id = "profile-certs">AAIRE Level 1</p>

      <Button id="profile-buddy-button" variant="contained">
        Buddy Up!
      </Button>
    </div>
  );
}

export default Profile;
