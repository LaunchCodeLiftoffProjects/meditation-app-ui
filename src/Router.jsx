import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./Layout";
import homePage from "./pages/homePage.jsx";
import meditation from "./pages/meditation.jsx";
import learnAboutMeditation from "./pages/learnAbout.jsx";
import login from "./pages/login.jsx";
import userProfile from "./pages/userProfile.jsx";
import Registration from "./pages/registration.jsx";

export const Routes = () => {
  return (
    <Router>
      <Layout>
        <div style={{ marginTop: "100px" }}>
          <Route path="/" exact component={homePage} />
          <Route path="/meditation" exact component={meditation} />
          <Route path="/learnAbout" exact component={learnAboutMeditation} />
          <Route path="/profile" exact component={userProfile} />
          <Route path="/login" exact component={login} />          
          <Route path="/Registration" exact component={Registration} />
        </div>
      </Layout>
    </Router>
  );
};