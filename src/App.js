import React from "react"
import { Provider } from "react-redux"
import store from "./store.js"
import AlbumsListContainer from "./components/AlbumsList"
import "./App.css"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AlbumsListContainer />
      </Provider>
    )
  }
}