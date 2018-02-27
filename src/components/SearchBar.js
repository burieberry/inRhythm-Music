import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbums } from '../store';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let searchTerm = '';
    const { search } = this.props.location;
    console.log(search)
    if (search) {
      searchTerm = search.split('=')[1];
    }
    console.log(searchTerm);
    this.props.fetchAlbums(searchTerm);
  }

  handleChange(ev) {
    this.setState({ input: ev.target.value });
  }

  handleSubmit(ev) {
    const { input } = this.state;
    ev.preventDefault();
    this.props.fetchAlbums(input);
    this.props.history.push({ search: `?search=${ input }` });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { input } = this.state;
    console.log(this.props)

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

const mapState = ({ albums }) => ({ albums });

const mapDispatch = ({ fetchAlbums });

export default withRouter(connect(mapState, mapDispatch)(SearchBar));
