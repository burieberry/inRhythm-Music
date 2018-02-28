import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArtists, fetchAlbums } from '../store';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', submitted: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let searchTerm = '';
    const { search } = this.props.location;
    if (search) {
      searchTerm = search.split('=')[1];
    }
    this.props.fetchArtists(searchTerm);
  }

  handleChange(ev) {
    this.setState({ input: ev.target.value });
  }

  handleSubmit(ev) {
    const { input } = this.state;
    ev.preventDefault();
    this.props.fetchArtists(input);
    this.props.history.push({ search: `?search=${ input }` });
    this.setState({ submitted: true });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { input, submitted } = this.state;
    const { artists, albums } = this.props;

    return (
      <div>
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
        {
          (submitted && artists.length === 0 && albums.length === 0) &&
            <h5>Artist not found. Please enter a valid name.</h5>
        }
        {
          (artists && artists.length) ? <Artists { ...this.props } /> : null
        }
      </div>
    );
  }
}

const Artists = ({ artists, fetchAlbums }) => {
  const handleClick = function(ev, artistId) {
    ev.preventDefault();
    fetchAlbums(artistId);
  };

  return (
    <div id="artists">
      <h4>Select artist:</h4>
      <ul>
        {
          artists.map(artist => {
            return (
              <li key={ artist.artistId }>
                <button
                  className="btn btn-xs"
                  onClick={ (ev) => handleClick(ev, `${ artist.artistId }`) }>
                  { artist.artistName }
                </button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

const mapState = ({ artists, albums }) => ({ artists, albums });

const mapDispatch = ({ fetchArtists, fetchAlbums });

export default withRouter(connect(mapState, mapDispatch)(SearchBar));
