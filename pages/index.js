import React, { Component } from "react";
import { rehydrate, css } from "glamor";
import glamorous from "glamorous";

import { registerNewsLetter } from "../api";
import ExecutionEnvironment from "exenv";
import ReactGA from "react-ga";

import { Standard } from "../components/button";
import { Input, Spacer } from "../components/form";
import { Title, Subtitle, Paragraph } from "../components/heading";

import Header from "../components/header";
import ContentSection from "../sections/content";

import { Follow } from "react-twitter-widgets";

const Container = glamorous.div({
  maxWidth: "1170px",
  width: "100%",
  margin: "0 auto",
});

const HeadTitle = glamorous(Title)({
  textAlign: "center",
});

const HeadParagraph = glamorous(Paragraph)({
  textAlign: "center",
  maxWidth: "960px",
  margin: "15px auto",
});

const Top = glamorous.div({
  padding: "75px 0",
});

const Center = glamorous.div({
  textAlign: "center",
});

const Form = glamorous.div({
  "@media(max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
  },
});

const StandardButton = glamorous(Standard)({
  "@media(max-width: 768px)": {
    margin: "15px",
    width: "calc(100% - 30px)",
  },
});

const FollowerSpacing = glamorous.div({
  marginBottom: "30px",
})

const InlineFollower = glamorous.div(
  {
    display: "inline-block",
  },
  ({ margin }) => {
    return {
      marginLeft: margin ? "15px" : 0,
    };
  }
);

if (ExecutionEnvironment.canUseDOM && process.env.NODE_ENV === "production") {
  ReactGA.initialize(process.env.GA_KEY);
  ReactGA.plugin.require("ecommerce");
}

class ReactCoach extends Component {
  state = {
    email: "",
    thanks: false,
  };
  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      ReactGA.pageview(window.location.pathname);
      ReactGA.set({ page: window.location.pathname });
    }
  }

  handleNewsletter = async e => {
    e.preventDefault();

    await registerNewsLetter(null, this.state.email, "reactcoach.com", "React");
    this.setState({
      email: "",
      thanks: true,
    });
  };
  render() {
    return (
      <Container>
        <Header />
        <Top>
          <HeadTitle>Welcome to React Coach</HeadTitle>
          <HeadParagraph>
            We'll teach all you need to know about React and the ecosystem through tutorials,
            screencasts, and project builds.
          </HeadParagraph>
        </Top>

        <Center>
          <h3>Follow me on Twitter</h3>
          <FollowerSpacing>
            <InlineFollower>
              <Follow username="browniefed" />
            </InlineFollower>
            <InlineFollower margin >
              <Follow username="reactcoach" />
            </InlineFollower>
          </FollowerSpacing>
          {!this.state.thanks &&
            <form onSubmit={this.handleNewsletter}>
              <div>
                <HeadParagraph>Get more information when we launch.</HeadParagraph>
              </div>
              <Spacer right>
                <Input
                  placeholder="Email"
                  type="email"
                  required
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Spacer>
              <StandardButton type="submit">Sign Up</StandardButton>
            </form>}
          {this.state.thanks && <Subtitle>Thank you for signing up!</Subtitle>}
        </Center>
      </Container>
    );
  }
}

export default ReactCoach;
