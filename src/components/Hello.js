import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Albums from './Albums';
import store, { fetchArtists } from '../store';

class Hello extends Component {
  componentDidMount() {
    store.dispatch(fetchArtists);
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <h1 id="headline">Albums inRhythm ♪♫♬</h1>
        <p>Find albums by any artist!</p>
        <SearchBar />
        <Albums />
      </div>
    );
  }
}

export default Hello;
