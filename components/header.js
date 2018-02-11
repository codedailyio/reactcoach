import React, { Component } from "react";
import styled from "react-emotion";

import { Standard } from "./button";

const Wrap = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "15px 10px",
  alignItems: "center",
  marginBottom: "15px",
});

const Left = styled.div({
  display: "flex",
  flex: "1 0 auto",
});

const Logo = styled.img({
  height: "90px",
  "@media(max-width: 768px)": {
    height: "70px",
  },
});

class Header extends Component {
  render() {
    return (
      <Wrap>
        <Left>
          <Logo src="/static/logo.svg" />
        </Left>
        <Standard>Get Started</Standard>
      </Wrap>
    );
  }
}

export default Header;
