import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
         // <BrowserRouter basename="my-app"> If our base name is different from '/', we must tell React the base name to avoid server 404 errors
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
