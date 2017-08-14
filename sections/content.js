import React, { Component } from "react";
import glamorous from "glamorous";

import { dark, red } from "../colors";

const Wrapper = glamorous.div({
  width: "100%",
  display: "inline-block",
  border: "1px solid #DDD",
  minHeight: "40vh",
  marginTop: "30px",
  textAlign: "left",
});

const Title = glamorous.h2({
  display: "inline-block",
  fontSize: "2rem",
  color: dark,
  marginLeft: "10px",
});

const SubTitle = glamorous.h3({
  color: dark,
  fontSize: "1.5rem",
});

const ListItem = glamorous.div({
  display: "flex",
  alignItems: "center",
  padding: "15px",
  borderBottom: "1px solid #DDD",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#f9f9f9",
  },
});

const SubListItem = glamorous(ListItem)({
  padding: "15px 0 15px 30px",
});

const IndexNumber = glamorous.div({
  display: "inline-block",
  border: `1px solid ${red}`,
  borderRadius: "50%",
  padding: "3px 5px",
});

class Content extends Component {
  render() {
    return (
      <Wrapper>
        <ListItem>
          <IndexNumber>1</IndexNumber>
          <Title>Introduction</Title>
        </ListItem>
        <SubListItem>
          <SubTitle>Why React?</SubTitle>
        </SubListItem>
        <SubListItem>
          <SubTitle>JSX</SubTitle>
        </SubListItem>
        <SubListItem>
          <SubTitle>Props</SubTitle>
        </SubListItem>
      </Wrapper>
    );
  }
}

export default Content;
