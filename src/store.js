import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_ALBUMS = 'GET_ALBUMS';
const GET_ARTISTS = 'GET_ARTISTS';

const initialState = {
  albums: [],
  artists: []
};

const getAlbums = (albums) => {
  return {
    type: GET_ALBUMS,
    albums
  }
};

const getArtists = (artists) => {
  return {
    type: GET_ARTISTS,
    artists
  }
};

export const fetchAlbums = (id) => dispatch => {
  const albumSearchUrl = `https://itunes.apple.com/lookup?id=${id}&entity=album`;

  return axios.get(albumSearchUrl)
    .then(res => res.data)
    .then(albums => {
      dispatch(getAlbums(albums.results));
    });
};

export const fetchArtists = (term) => dispatch => {
  const artistSearchUrl = `https://itunes.apple.com/search?term=${term}&entity=musicArtist&attribute=allArtistTerm&limit=10`;

  return axios.get(artistSearchUrl)
    .then(res => res.data)
    .then(artists => {
      dispatch(getArtists(artists.results));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return { ...state, albums: action.albums };

    case GET_ARTISTS:
      return { ...state, artists: action.artists };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
