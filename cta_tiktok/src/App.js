import React from 'react';
import NavBar from "./features/navbar/NavBar";
import LandingPage from "./features/home/LandingPage";
import SignUp from "./features/signup/Signup";
import Login from "./features/login/Login";
import Logout from "./features/logout/Logout";
import Upload from "./features/uploads/Upload";
import TrendingFeed from "./features/trending/TrendingFeed";
import FollowingFeed from "./features/following/FollowingFeed";
import Profile from "./features/profile/Profile";
import { Route } from "react-router-dom";
import AuthProvider from "./providers/AuthContext";
import { ProtectedRoute } from "./util/routesUtil";
import './App.css';

function App() {
  return (
    <div className="App">
    <AuthProvider>
        <Route exact path="/">
          <NavBar />
          <LandingPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <ProtectedRoute path="/trending">
          <TrendingFeed />
        </ProtectedRoute>
        <ProtectedRoute path="/following">
          <FollowingFeed />
        </ProtectedRoute>
        <ProtectedRoute path="/upload">
          <Upload />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
    </AuthProvider>
    </div>
  );
}

export default App;
