import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const GET_ALBUMS = 'GET_ALBUMS';
const iTunesUrl = 'https://itunes.apple.com/search?term=';

const initialState = {
  albums: []
};

const getAlbums = (albums) => {
  return {
    type: GET_ALBUMS,
    albums
  }
};

export const fetchAlbums = (term) => dispatch => {
  return axios.get(`${iTunesUrl}${term}&entity=album&attribute=allArtistTerm`)
    .then(res => res.data)
    .then(albums => {
      dispatch(getAlbums(albums.results));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return { ...state, albums: action.albums };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
