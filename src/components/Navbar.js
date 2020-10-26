import React, { Component } from "react";
import { Link } from "react-router-dom";
class navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            Home
          </Link>

          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
