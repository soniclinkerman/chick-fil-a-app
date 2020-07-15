import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/form-input";
import "./sign-in.css";
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="sign-in-form">
        <h1>SIGN IN</h1>

        <form>
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
            value="Sign In"
            onClick={this.handleClick}
          />
        </form>
        <Link className="account-link" to="/sign-up">
          Don't have an account? Sign Up!
        </Link>
      </div>
    );
  }
}

export default SignIn;
