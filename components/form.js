import React from "react";
import glamorous from "glamorous";

export const Input = glamorous.input({
  padding: "11px 5px",
  border: "1px solid #DDD",
  fontSize: "1.2rem",
  borderRadius: "5px",
});

export const Spacer = glamorous.div(
  {
    display: "inline-block",
  },
  ({ right, left }) => {
    let dynamic = {};

    if (right) {
      dynamic.marginRight = "15px";
    }
    if (left) {
      dynamic.marginLeft = "15px";
    }

    return dynamic;
  }
);