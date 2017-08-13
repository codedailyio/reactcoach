import React from "react";
import glamorous from "glamorous";

import { primary } from "../font";
import { dark } from "../colors";

export const Title = glamorous.h1({
  fontSize: "3rem",
  fontFamily: primary,
  fontWeight: "bold",
  color: dark,
});

export const Subtitle = glamorous.h3({
  fontSize: "1.5rem",
  fontFamily: primary,
  color: dark,
});

export const Paragraph = glamorous.p({
  fontSize: "1.2rem",
  lineHeight: "1.5rem",
  color: dark,
})