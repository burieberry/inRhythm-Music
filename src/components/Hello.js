import React from 'react';
import SearchBar from './SearchBar';
import Albums from './Albums';
import ErrorBoundary from './ErrorBoundary';

class Hello extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <div id="main" className="container-fluid">
          <h1 id="headline">Albums inRhythm ♪♫♬</h1>
          <p>Find albums by any artist!</p>
          <SearchBar />
          <Albums />
        </div>
      </ErrorBoundary>
    );
  }
}

export default Hello;
