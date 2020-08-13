import React from 'react';
import NavBar from "./features/navbar/NavBar";
import LandingPage from "./features/home/LandingPage";
import SignUp from "./features/signup/Signup";
import Login from "./features/login/Login";
import Upload from "./features/uploads/Upload";
import TrendingFeed from "./features/trending/TrendingFeed";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <NavBar />
        <LandingPage />
      </Route>
      <Route path="/trending">
        <TrendingFeed />
      </Route>
      <Route path="/following">

      </Route>
      <Route path="/upload">
        <Upload />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
