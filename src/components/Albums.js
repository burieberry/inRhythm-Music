import React from 'react';

const Albums = ({ albums }) => {
  console.log(albums);
  // TODO: remove this when covers are added
  const albumPlaceholder = <div style={{ backgroundColor: 'grey', width: '250px', height: '250px', margin: '0 auto' }} />;

  return (
    <div id="albums" className="container-fluid">
      <h2>All Albums by [ArtistNameHere]</h2>
      <div className="row">
        <div className="col-sm">
          <h4>[AlbumNameHere]</h4>
          <p>[YEAR]</p>
          {/*<img /> placeholder: */}
          { albumPlaceholder }
        </div>
        <div className="col-sm">
          <h4>[AlbumNameHere]</h4>
          <p>[YEAR]</p>
          { albumPlaceholder }
        </div>
        <div className="col-sm">
          <h4>[AlbumNameHere]</h4>
          <p>[YEAR]</p>
          { albumPlaceholder }
        </div>
      </div>
    </div>
  )
};

export default Albums;
