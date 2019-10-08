import React, { Component } from "react";
import NavbarMenu from "./components/Navbar";
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';


class App extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const { toggle } = this;
    return (
      <div>
        <NavbarMenu isOpen={isOpen} toggle={toggle} />
        <HomePage/>
      </div>
    );
  }
}

export default App;
