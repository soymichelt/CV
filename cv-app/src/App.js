/* Node & ReactJS Modules */
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'

/* Pages Components */
import Home from './pages/home/Home'

class App extends Component {

  render() {

    return (
      <Provider
        store={store}
      >
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home/Index" component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    );

  }
  
}

export default App;