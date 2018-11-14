import React, { Component } from "react";
import propTypes from "prop-types";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showHeaderMenu: false
    };
  }

  onShowMenu = e => {
    console.log("kartik");
    this.setState({ showHeaderMenu: !this.state.showHeaderMenu });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-danger mb-3 py-0 scrolling-navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            {this.props.branding}
          </a>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              onClick={this.onShowMenu}
              data-target="#navbarText"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {this.state.showHeaderMenu ? (
              <div className="collapse navbar-collapse show">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      SignOut
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  branding: propTypes.string.isRequired
};
export default Header;
