import React, { Component } from "react";

import "../styles/styles.css";

class Header extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link className="active" to="/home">
          Inicio
        </Link>
        <a onClick={this.logout}>Salir</a>
      </div>
    );
  }
}

export default Header;
