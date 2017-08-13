import React from "react";
import glamorous from "glamorous";

import { red, dark } from "../colors";

export const Standard = glamorous.button({
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
