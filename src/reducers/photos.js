import { SET_PHOTOS, ADD_PHOTO } from "../actions/photos"

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_PHOTOS:
      return [
        ...action.payload.photos
      ]
    case ADD_PHOTO:
      return [
        ...state,
        { ...action.payload }
      ]
    default:
      return state
  }
}