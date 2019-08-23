import React from "react"
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store.js"
import AlbumsListContainer from "./components/AlbumsList"
import PhotoPageContainer from "./components/PhotoPage"
import "./App.css"

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/" component={AlbumsListContainer} />
          <Route path="/albums/:id" component={PhotoPageContainer} />
        </Provider>
      </BrowserRouter>
    )
  }
}