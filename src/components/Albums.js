import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Albums = ({ albums }) => {
  const artist = albums.length ? albums[0].artistName : null;
  const allAlbums = albums.length ? albums.slice(1) : null;

  // request larger size images
  const resize = function(img) {
    return img.replace('100x100bb', '250x250bb');
  };

  return (
    <div id="albums" className="container-fluid">
      {
        artist && <h3>All Albums by { artist }</h3>
      }

      {
        (artist && albums.length === 1 ) && <h5>No albums found.</h5>
      }

      <div className="row">
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

const mapState = ({ albums, artists }) => ({ albums, artists });

export default connect(mapState)(Albums);
