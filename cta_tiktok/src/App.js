import React from 'react';
import NavBar from "./features/navbar/NavBar";
import LandingPage from "./features/home/LandingPage";
import Signup from "./features/signup/Signup";
import Login from "./features/login/Login";
import Upload from "./features/uploads/Upload";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact to="/">
        <LandingPage />
        <Upload />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
