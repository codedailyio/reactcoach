import React, { Component } from "react";
import glamorous from "glamorous";

import { red } from "../colors";

const Started = glamorous.button({
  borderRadius: "30px",
  padding: "11px 30px",
  backgroundColor: red,
  border: 0,
  color: "#FFF",
  fontSize: "1.2rem",
  transition: "all .5s ease",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#333"
  }
});

class Header extends Component {
  render() {
    return (
      <div>
        <Started>Get Started</Started>
      </div>
    );
  }
}

export default Header;
