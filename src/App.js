import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
