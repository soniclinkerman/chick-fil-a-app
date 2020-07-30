import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/chick-fil-a-logo.svg";
import "./error.css";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <Logo className="logo error-img" />
          <h5>Oh no! Looks like we ran into an error :(</h5>
          <h4>
            Don't worry! Refresh the page. If that doesn't work, come back in a
            bit and we'll be fixed up ready to server you
          </h4>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
