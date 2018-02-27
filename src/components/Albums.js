import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Albums = ({ albums }) => {
  console.log(albums);
  const artist = albums.length ? albums[0].artistName : null;
  const allAlbums = albums.length ? albums.slice(1) : null;

  const resize = function(img) {
    return img.replace('100x100bb', '250x250bb');
  };

  return (
    <div id="albums" className="container-fluid">
      {
        artist && <h2>All Albums by { artist }</h2>
      }
      <div className="row">
      {
        (artist && albums.length === 1 ) && (<p>No albums found.</p>)
      }
      {
        allAlbums &&
        allAlbums.map(album => {
          return (
            <div key={ album.collectionId } className="album col-md-4">
              <Link to={ album.collectionViewUrl } target="_blank">
                <h4 className="album-title">{ album.collectionName }</h4>
                {
                  album.artworkUrl100 && (
                    <img
                      src={ resize(album.artworkUrl100) }
                      alt={`Album cover of ${ album.collectionName }`}
                      className="cover-img"
                    />
                  )
                }
              </Link>
            </div>
          );
        })
      }
      </div>
    </div>
  )
};

const mapState = ({ albums }) => ({ albums });

export default connect(mapState)(Albums);
