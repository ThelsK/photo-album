import request from 'superagent'

export function getPhotosByAlbum(albumId) {
  return function (dispatch) {
    request(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => {
        dispatch(setPhotos(response.body))
      })
  }
}

export const SET_PHOTOS = 'SET_PHOTOS'

export function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    payload: {
      photos
    }
  }
}

export const ADD_PHOTO = 'ADD_PHOTO'

export function addPhoto(id, title) {
  return {
    type: ADD_PHOTO,
    payload: {
      id,
      title
    }
  }
}