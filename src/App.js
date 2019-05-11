import React from "react";
//import React, { Component } from "react";
//import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  //Link,
  NavLink,
  Switch
  //Redirect
  //withRouter
} from "react-router-dom";

// src/pages/
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import MusicPage from "./pages/Music";
import MusicYTPage from "./pages/MusicYT";
import NoMatchPage from "./pages/NoMatch";
//import NetlifyAuth from "./components/NetlifyAuth";

// src/
import "./App.css";

// Global Variables
//const netlifyIdentity = require("netlify-identity-widget");

function NavigationBar() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <NavLink to="/" className="normal" activeClassName="active" exact>
              <Header name="Home" className="nav-item active" />
            </NavLink>

            <NavLink
              to="/about"
              className="normal"
              activeClassName="active"
              exact
            >
              <Header name="About" className="nav-item active" />
            </NavLink>

            <NavLink
              to="/music"
              className="normal"
              activeClassName="active"
              exact
            >
              <Header name="Music" className="nav-item active" />
            </NavLink>

            <NavLink
              to="/musicYT"
              className="normal"
              activeClassName="active"
              exact
            >
              <Header name="MusicYT" className="nav-item active" />
            </NavLink>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route path="/about" render={props => <AboutPage {...props} />} />
          <Route path="/music" render={props => <MusicPage {...props} />} />
          <Route path="/musicyt" render={props => <MusicYTPage {...props} />} />
          <Route render={NoMatchPage} />
        </Switch>

        <ul className="nav navbar-nav">
          <li>
            <div data-netlify-identity-menu />
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Footer />
    </div>
  );
}

export default App;
