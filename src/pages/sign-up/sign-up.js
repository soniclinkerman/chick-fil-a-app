import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../sign-in/sign-in.css";
import FormInput from "../../components/FormInput/form-input";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="sign-in-form">
        <h1>SIGN UP</h1>

        <form>
          <FormInput
            placeholder="Name"
            name="name"
            label="Name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
          />

          <FormInput
            placeholder="Email"
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
          />

          <FormInput
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />

          <input
            className="submit-button sign-in"
            type="submit"
            value="Create Account"
            onClick={this.handleClick}
          />
        </form>
        <Link className="account-link" to="/sign-in">
          Already have an account? Sign In!
        </Link>
      </div>
    );
  }
}

export default SignUp;
