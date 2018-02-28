import React from 'react';

const Artists = ({ artists, fetchAlbums }) => {
  const handleClick = function(ev, artistId) {
    ev.preventDefault();
    fetchAlbums(artistId);
  };

  return (
    <div id="artists">
      <h4>Select artist:</h4>
      <div className="row">
        {
          artists.map(artist => {
            return (
              <div key={ artist.artistId } className="artist-li col-md-4">
                <button
                  className="btn btn-xs"
                  onClick={ (ev) => handleClick(ev, `${ artist.artistId }`) }>
                  { artist.artistName }
                </button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Artists;
