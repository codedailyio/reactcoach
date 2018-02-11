import React from "react";
import styled from "react-emotion";

import { primary } from "../font";
import { dark } from "../colors";

export const Title = styled.h1({
  fontSize: "3rem",
  fontFamily: primary,
  fontWeight: "bold",
  color: dark,
});

export const Subtitle = styled.h3({
  fontSize: "1.5rem",
  fontFamily: primary,
  color: dark,
});

export const Paragraph = styled.p({
  fontSize: "1.2rem",
  lineHeight: "1.5rem",
  color: dark,
})