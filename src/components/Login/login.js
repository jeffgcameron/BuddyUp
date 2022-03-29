import React, { useEffect, useState } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Logo from "../../images/BU.png";

import "./style.css";

function LogIn() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const[loginStatus, setLoginStatus] = useState("");

  let history = useHistory()

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3000/login").then((response)=> {
      console.log(response);
    })
  }, [])
  

  const login = () => {
    Axios.post("http://localhost:3000/login", {
      email: email,
      password: password,
    }).then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].email)
        history.push("/profile")
      }
      console.log(response);
    })
  }

  return (
    <div className="login-body-div">
      <div className="login-logo-div">
        <img className="login-logo" src={Logo}></img>
      </div>

      <p className="login-text">LOGIN</p>

      <div id="login-div">
        <TextField
          required
          id="login-email"
          label="email"
          variant="filled"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div id="login-break"></div>
        <TextField
          required
          id="login-password"
          label="password"
          variant="filled"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
   

      <Button id="login-button" variant="contained" onClick={login}>
        Login
      </Button>

      <p id="login-fail" className="login-footer">
        {loginStatus}
      </p>

      <div id="create-account-link-div">
        <Link id="create-account-link" className="login-footer" to="/signup">
          New to Buddy UP? Create An Account!
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
