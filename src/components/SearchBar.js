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
    const { albums } = this.props;
    console.log(albums);

    return (
      <form id="search" onSubmit={ handleSubmit } className="col-xs-12">
        <input
          onChange={ handleChange }
          name="search"
          id="search-box"
          placeholder="Enter an artist name"
          autoFocus="true"
        />
        {/*<datalist id='artist'>
          {
            albums.map(artist => (
              <option
                key={artist.id}
                value={artist.name}
              />
            ))
          }
        </datalist>*/}
        <button id="search-btn" className="btn btn-lg">Search</button>
      </form>
    );
  }
}

const mapState = ({ albums }) => ({ albums });

const mapDispatch = ({ fetchAlbums });

export default connect(mapState, mapDispatch)(SearchBar);
