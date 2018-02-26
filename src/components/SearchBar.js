import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../store';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({ input: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.fetchAlbums(this.state.input);
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { input } = this.state;

    console.log('props in SearchBar', this.props);
    console.log('state in SearchBar', this.state);

    return (
      <form id="search" onSubmit={ handleSubmit } className="col-xs-12">
        <input
          onChange={ handleChange }
          name="search"
          id="search-box"
          placeholder="Enter an artist name"
          autoFocus="true"
        />
        <button id="search-btn" className="btn btn-lg">Search</button>
      </form>
    );
  }
}

const mapDispatch = ({ fetchAlbums });

export default connect(null, mapDispatch)(SearchBar);
