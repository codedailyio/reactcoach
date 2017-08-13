import React, { Component } from "react";
import glamorous from "glamorous";

import { red } from "../colors";

const Wrap = glamorous.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "15px 5px",
});

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
    backgroundColor: "#333",
  },
});

class Header extends Component {
  render() {
    return (
      <Wrap>
        <Started>Get Started</Started>
      </Wrap>
    );
  }
}

export default Header;
