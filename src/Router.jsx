import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout";
import homePage from "./pages/homePage.jsx";
import login from "./pages/login.jsx";
import userProfile from "./pages/userProfile.jsx";
import meditation from "./pages/meditation.jsx";


export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/" exact component={homePage} />
          <Route path="/login" exact component={login} />
          <Route path="/profile" exact component={userProfile} />
          <Route path="/meditation" exact component ={meditation} />
        </div>
      </Layout>
    </Router>
  );
};