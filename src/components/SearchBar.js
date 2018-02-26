import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ input: ev.target.value });
  }

  render() {
    const { handleChange } = this;
    const { input } = this.state;

    return (
      <form id="search" className="col-xs-12">
        <input
          onChange={ handleChange }
          id="search-box"
          placeholder="Enter an artist name"
          autoFocus="true"
        />
        <button id="search-btn" className="btn btn-lg">Search</button>
      </form>
    );
  }
}

export default SearchBar;
