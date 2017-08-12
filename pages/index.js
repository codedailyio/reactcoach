import React, { Component } from "react";
import { rehydrate, css } from "glamor";
import glamorous from "glamorous";

import { registerNewsLetter } from "../api";

class ReactCoach extends Component {
  state = {
    email: "",
    thanks: false,
  };
  handleNewsletter = async (e) => {
    e.preventDefault();

    await registerNewsLetter(null, this.state.email, "reactcoach.com", "React");
    this.setState({
      email: "",
      thanks: true,
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to React Coach</h2>
        <p>
          We'll teach all you need to know about React and the ecosystem through tutorials,
          screencasts, and interactive demos.
        </p>
        <div>
          {!this.state.thanks && <form onSubmit={this.handleNewsletter}>
            <input
              type="email"
              required
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <button type="submit">Sign Up</button>
          </form>}
          {
            this.state.thanks && <h2>Thank you for signing up!</h2>
          }
        </div>
      </div>
    );
  }
}

export default ReactCoach;
