import React from 'react'

export default function AlbumsList(props) {
  console.log(props.albums)
  return (
    <div>
      <h1>All Albums</h1>

      <h2>There are {props.albums.length} albums available:</h2>

      <ul>
        {props.albums.map(album =>
          <li key={album.id}>{album.title}</li>
        )}
      </ul>
    </div>
  )
}