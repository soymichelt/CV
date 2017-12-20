/* Node & ReactJS Modules */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/* Pages Components */
import Index from './pages/home/index/Index';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/Home/Index" component={Index} />
        </div>
      </BrowserRouter>
    );

  }
  
}

export default App;
