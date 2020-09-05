import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";

import About from "./containers/About/About";
import Layout from "./components/Layout/Layout";
import Projects from "./containers/Projects/Projects";

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={About} />
        <Route path="/projects" exact component={Projects} />
      </Layout>
    );
  }
}

export default App;
