import request from 'superagent'

export const getAlbums = () => dispatch =>
  request('https://jsonplaceholder.typicode.com/albums')
    .then(response => {
      dispatch(setAlbums(response.body))
    })

export const SET_ALBUMS = 'SET_ALBUMS'

export const setAlbums = (albums) =>
  ({
    type: SET_ALBUMS,
    payload: {
      albums
    }
  })

export const createAlbum = title => dispatch =>
  request
    .post('https://jsonplaceholder.typicode.com/albums')
    .send({ title })
    .then(response => {
      console.log("Creating album:", response.body)
      dispatch(addAlbum(response.body.id, response.body.title))
    })


export const ADD_ALBUM = 'ADD_ALBUM'

export const addAlbum = (id, title) =>
  ({
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  })