import React from "react";
import {Link} from "react-router-dom";
import NavDropdown  from "./nav_dropdown";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <nav className="loggedIn">
          <div className="welcome">
            <Link to="/">
              <img id="logoImage" src={window.logoImage} />
            </Link>
          </div>
          <NavDropdown logout={this.props.logout} currentUser = {currentUser}/>
        </nav>
      )
    } else {
      return (
        <nav className="greeting-modal">
          <div className="welcome"> 
            <Link to="/">
              <img id="logoImage" src={window.logoImage} />
            </Link>
          </div>
          <button onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button onClick={() => this.props.openModal('login')}>Log in</button>
        </nav>
      )
    }
  }
};