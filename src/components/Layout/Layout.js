import React, { Component } from "react";

import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
import ProjectContext from "../../context/project-context";

class Layout extends Component {
  state = {
    navVisible: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState({ navVisible: !this.state.navVisible });
  };

  render() {
    let layout = null;
    this.state.navVisible
      ? (layout = (
          <NavigationItems show clicked={this.sideDrawerToggleHandler} />
        ))
      : (layout = <NavigationItems clicked={this.sideDrawerToggleHandler} />);

    return (
      <ProjectContext.Provider value={{ navVisible: this.state.navVisible }}>
        <React.Fragment>
          {layout}
          <Toolbar clicked={this.sideDrawerToggleHandler} />
          <Contacts />

          {this.props.children}

          <Footer />
        </React.Fragment>
      </ProjectContext.Provider>
    );
  }
}

export default Layout;
