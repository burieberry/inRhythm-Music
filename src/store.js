import { createStore, applyMiddleware } from 'redux';
import logger from 'react-logger';
import thunk from 'react-thunk';
import axios from 'axios';

const GET_ALBUMS = 'GET_ALBUMS';
const iTunesUrl = 'https://itunes.apple.com/search?term=';

const getAlbums = (albums) => {
  return {
    type: GET_ALBUMS,
    albums
  }
};

const fetchAlbums = (term) => dispatch => {
  return axios.get(`iTunesUrl${term}&entity=allArtist&attribute=allArtistTerm`)
    .then(res => res.data)
    .then(albums => {
      console.log(albums);
      // dispatch(getAlbums(albums));
    });
};

const reducer = (albums = [], action) => {
  switch(action.type) {
    case GET_ALBUMS:
      return action.categories;
    default:
      return albums;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
