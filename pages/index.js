import React, { Component } from "react";
import { rehydrate, css } from "glamor";
import glamorous from "glamorous";

import { registerNewsLetter } from "../api";

import Header from "../components/header";
import { Standard } from "../components/button";
import { Input, Spacer } from "../components/form";
import { Title, Subtitle, Paragraph } from "../components/heading";

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

class ReactCoach extends Component {
  state = {
    email: "",
    thanks: false,
  };
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

        <HeadTitle>Welcome to React Coach</HeadTitle>
        <HeadParagraph>
          We'll teach all you need to know about React and the ecosystem through tutorials,
          screencasts, and interactive demos.
        </HeadParagraph>
        <div>
          {!this.state.thanks &&
            <form onSubmit={this.handleNewsletter}>
              <Spacer right>
                <Input
                  placeholder="Email"
                  type="email"
                  required
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Spacer>
              <Standard type="submit">Sign Up</Standard>
            </form>}
          {this.state.thanks && <h2>Thank you for signing up!</h2>}
        </div>
      </Container>
    );
  }
}

export default ReactCoach;
