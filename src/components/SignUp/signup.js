import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Logo from "../../images/BU.png";

import "./style.css";

function Signup() {
  const signup = () => {
    Axios.post("http://localhost:3000/signup", {
      email: emailReg,
      password: passwordReg,
      name: nameReg,
      bio: bioReg,
      activities: activitiesReg,
      certifications: certificationReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const [emailReg, setemailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const [nameReg, setNameReg] = useState("")
  const [bioReg, setBioReg] = useState("")
  const [activitiesReg, setActivitiesReg] = useState("")
  const [certificationReg, setCertificationReg] = useState("")

  return (
    <div className="signup-body-div">
      <div className="signup-logo-div">
        <img className="signup-logo" src={Logo}></img>
      </div>

      <p className="signup-text">Sign Up</p>

      <div id="signup-div">
        <TextField
          required
          id="signup-email"
          className="signup-box"
          label="Email"
          variant="filled"
          onChange={(e) => {
            setemailReg(e.target.value);
          }}
        />
        <div className="signup-break"></div>
        <TextField
          required
          id="signup-password"
          className="signup-box"
          label="Password"
          variant="filled"
          onChange={(e) => {
            setpasswordReg(e.target.value);
          }}
        />
        <div className="signup-break"></div>
        <TextField
          required
          id="signup-password-confirm"
          className="signup-box"
          label="Confirm Password"
          variant="filled"
        />
        <div className="signup-break"></div>
        <TextField
          required
          id="signup-name"
          className="signup-box"
          label="Name"
          variant="filled"
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        />
        <div className="signup-break"></div>
        <TextField
          required
          id="signup-bio"
          className="signup-box"
          multiline
          rows={4}
          label="Bio"
          variant="filled"
          onChange={(e) => {
            setBioReg(e.target.value);
          }}
        />
        <div className="signup-break"></div>
        <TextField
          required
          id="signup-activities"
          className="signup-box"
          multiline
          rows={2}
          label="Activities"
          variant="filled"
          onChange={(e) => {
            setActivitiesReg(e.target.value);
          }}
        />
        {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Biking</MenuItem>
            <MenuItem value={20}>Skiing</MenuItem>
            <MenuItem value={30}>Snowboarding</MenuItem>
            <MenuItem value={40}>Ski Mountaineering</MenuItem>
          </Select>
        </FormControl> */}
        <div className="signup-break"></div>
        <TextField
          required
          id="signup-certifications"
          className="signup-box"
          label="Certifications"
          multiline
          rows={2}
          variant="filled"
          onChange={(e) => {
            setCertificationReg(e.target.value);
          }}
        />
      </div>
      <p id="signup-password-fail" className="signup-footer">
        Passwords Do Not Match. Please Try Again!
      </p>
      <p id="signup-fail" className="signup-footer">
        Please Fill Out Entire Form!
      </p>

      <Button id="signup-button" variant="contained" onClick={signup}>
        Buddy Up!
      </Button>

      <div id="login-link-div">
        <Link id="login-link" className="signup-footer" to="/">
          Already Have An Account? Login Here!
        </Link>
      </div>
    </div>
  );
}

export default Signup;
