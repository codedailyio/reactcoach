import React from "react";
import styled from "react-emotion";

import { primary, secondary } from "../font";
import { dark, red } from "../colors";

export const Square = styled.div({
  backgroundColor: "#FFF",
  boxShadow: "0 6px 5px 0px rgba(0,0,0,0.06)",
  padding: "20px",
  borderRadius: "2px",
  minHeight: "100px",
  border: "1px solid #f7f7f7",
  textAlign: "center",
  paddingTop: "30px",
  transition: "1s",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#F2F2F2"
  }
});

export const Title = styled.h3({
  color: dark,
  fontFamily: primary,
  fontWeight: "600",
  letterSpacing: "0.4px",
  lineHeight: "1.2",
  textRendering: "optimizeLegibility",
  fontSize: "1.25rem",
  marginTop: '0',
  marginBottom: '.5rem',
});

export const Number = styled.div({
  display: "inline",
  color: red,
  border: `2px solid ${red}`,
  padding: "2px 4px 2px 4px",
  marginRight: "10px",
  textAlign: "center",
  borderRadius: "100px",
});

export const Paragraph = styled.p({
  color: dark,
  fontFamily: secondary,
  fontSize: "19px",
  paddingLeft: "10px",
  paddingRight: "10px",
  lineHeight: "24px",
  fontWeight: "400",
  color: "inherit",
  marginBottom: "1rem",
  textRendering: "optimizeLegibility",
});
