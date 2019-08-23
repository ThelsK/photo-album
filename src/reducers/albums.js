import { SET_ALBUMS, ADD_ALBUM } from "../actions/albums"

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_ALBUMS:
      return [
        ...action.payload.albums
      ]
    case ADD_ALBUM:
      return [
        ...state,
        { ...action.payload }
      ]
    default:
      return state
  }
}