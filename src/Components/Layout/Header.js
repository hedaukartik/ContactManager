import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

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
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact/add" className="nav-link">
                      Add Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
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
