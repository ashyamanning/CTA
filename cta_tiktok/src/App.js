import React from 'react';
import NavBar from "./features/navbar/NavBar";
import LandingPage from "./features/home/LandingPage";
import SignUp from "./features/signup/Signup";
import Login from "./features/login/Login";
import Logout from "./features/logout/Logout";
import Upload from "./features/uploads/Upload";
import TrendingFeed from "./features/trending/TrendingFeed";
import FollowingFeed from "./features/following/FollowingFeed";
import { Route } from "react-router-dom";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil";
import './App.css';

function App() {
  return (
    <div className="App">
    <AuthProvider>
        <Route exact path="/">
          <NavBar />
          <LandingPage />
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
        <AuthRoute path="/signup">
          <SignUp />
        </AuthRoute>
        <AuthRoute path="/login">
          <Login />
        </AuthRoute>
        <AuthRoute path="/logout">
          <Logout />
        </AuthRoute>
    </AuthProvider>
    </div>
  );
}

export default App;
