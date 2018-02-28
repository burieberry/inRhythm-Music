import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArtists, fetchAlbums } from '../store';

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
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { input } = this.state;
    const { artists } = this.props;
    console.log(artists);

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
          artists && (<Artists { ...this.props } />)
        }
      </div>
    );
  }
}

const Artists = ({ artists, albums, fetchAlbums }) => {
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
                <button className="btn btn-sm" onClick={ (ev) => handleClick(ev, `${ artist.artistId }`) }>
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
