import React from 'react'

export default function PhotoPage(props) {
  console.log(props.photos)
  return (
    <div>
      <h1>Photos in this album</h1>

      <h2>There are {props.photos.length} photos available:</h2>

      {props.photos.map(photo => {
        return (
          <div>
            <p>{photo.title}</p>
            <img src={photo.url} alt={photo.title}></img>
          </div>
        )
      })}
    </div>
  )
}