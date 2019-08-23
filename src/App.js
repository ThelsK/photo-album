import React from "react";
import { Provider } from "react-redux"
import store from "./store.js"
import logo from './logo.svg';
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Welcome to React
            </h1>
          </header>
          <p className="App-intro">
            Get started!
          </p>
        </div>
      </Provider>
    )
  }
}