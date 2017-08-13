import React, { Component } from "react";
import glamorous from "glamorous";

import { Standard } from "./button";

const Wrap = glamorous.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "15px 5px",
});

class Header extends Component {
  render() {
    return (
      <Wrap>
        <Standard>Get Started</Standard>
      </Wrap>
    );
  }
}

export default Header;
