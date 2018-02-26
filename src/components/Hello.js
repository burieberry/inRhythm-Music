import React from 'react';
import SearchBar from './SearchBar';
import Albums from './Albums';

class Hello extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="container-fluid">
        <h1 id="headline">Album Guide ♪♫♬</h1>
        <p>Find albums by any artist!</p>
        <SearchBar />
        <Albums />
      </div>
    );
  }
}

export default Hello;
