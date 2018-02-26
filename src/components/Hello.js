import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Albums from './Albums';
import store, { fetchAlbums } from '../store';

class Hello extends Component {
  componentDidMount() {
    store.dispatch(fetchAlbums);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 id="headline">Albums inRhythm ♪♫♬</h1>
        <p>Find albums by any artist!</p>
        <SearchBar />
        <Albums />
      </div>
    );
  }
}

export default Hello;
