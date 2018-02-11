import React from "react";
import styled from "react-emotion";

import { red, dark } from "../colors";

export const Standard = styled.button({
  borderRadius: "30px",
  padding: "10px 15px",
  backgroundColor: red,
  border: 0,
  color: "#FFF",
  fontSize: "1.2rem",
  transition: "all .5s ease",
  cursor: "pointer",
  fontFamily: "inherit",
  ":hover": {
    backgroundColor: "#333",
  },
});
