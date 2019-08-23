import request from 'superagent'

export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbums(response.body))
      })
  }
}

export const SET_ALBUMS = 'SET_ALBUMS'

export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: {
      albums
    }
  }
}

export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  }
}