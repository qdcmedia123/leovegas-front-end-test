// @ts-nocheck
import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props:any) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error:any) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error:any, info:any) {
    this.setState({
      ...this.state,
      error: error.toString(),
      errorInfo: info.componentStack,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong {this.state.error} ${this.state.errorInfo}
        </h1>
      );
    }

    return this.props.children;
  }
}