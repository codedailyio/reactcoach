import React, { Component } from "react";
import glamorous from "glamorous";

import { dark, red } from "../colors";

import { Square, Title, Paragraph, Number } from "../components/square";

const Wrapper = glamorous.div({
  padding: "1rem 0",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  "@media(max-width: 768px)": {
    flexDirection: "column",
  },
});

const FlexSquare = glamorous(Square)({
  width: "calc( (100% / 3) - 20px)",
  margin: "10px",
  // "@media(max-width: 768px)": {
  //   width: "auto",
  // },
});

const contents = [
  {
    type: "course",
    name: "Introduction",
    description:
      "Get started with the React basics. Including understanding JSX, State, Props, and Life Cycle methods.",
  },
  {
    type: "exercise",
    name: "Shopping Cart",
    description:
      "Lets build a shopping cart with our new React skills. We'll focus on component boundaries and using state.",
  },
  {
    type: "course",
    name: "All About Children",
    description:
      "Understand children prop in React and how we can use it to compose complex components.",
  },
  {
    type: "exercise",
    name: "Tab Builder",
    description: "We'll build out a tab system where state is abstracted away and we manipulate our children for a clean API.",
  },
];

class Content extends Component {
  render() {
    return (
      <Wrapper>
        {contents.map(({ type, name, description }, index) => {
          return (
            <FlexSquare>
              <Title>
                <Number>
                  {index + 1}
                </Number>
                {name}
              </Title>
              <Paragraph>
                {description}
              </Paragraph>
            </FlexSquare>
          );
        })}
      </Wrapper>
    );
  }
}

export default Content;
