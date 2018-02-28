// error handling component
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
       error: '',
       errorInfo: ''
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error, errorInfo: info });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <p>Error: { error.toString() }</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
