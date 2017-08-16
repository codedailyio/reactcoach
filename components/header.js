import React, { Component } from "react";
import glamorous from "glamorous";

import { Standard } from "./button";

const Wrap = glamorous.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "15px 10px",
  alignItems: "center",
  marginBottom: "15px",
});

const Left = glamorous.div({
  display: "flex",
  flex: "1 0 auto",
});

const Logo = glamorous.img({
  width: "200px",
  height: "100%",
});

class Header extends Component {
  render() {
    return (
      <Wrap>
        <Left>
          <Logo src="./static/logo.svg" />
        </Left>
        <Standard>Get Started</Standard>
      </Wrap>
    );
  }
}

export default Header;
