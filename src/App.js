import React from "react";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ProfilePage from "./pages/Profile";
import HomePage from "./pages/Home";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Tab } from "@mui/material";
// import { Home } from "@material-ui/icons";

// function HomeTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name = "Home" component={Home} />
//     </Tab.Navigator>
//   )
// }

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
