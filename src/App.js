/* Node & ReactJS Modules */
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './state/store'

/* Pages Components */
import Home from './pages/home/Home'
import Signin from './pages/account/Signin'
import ForgivePassword from './pages/account/ForgivePassword'
import Timeline from './pages/timeline/Timeline'
/*import Article from './pages/timeline/Article'
import EditorTest from './pages/editor/Test'
import TimelinePost from './pages/timeline/Post'*/

class App extends Component {

    render() {

        return (
            <Provider
                store={store}
            >
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Home/Index' component={Home} />
                        <Route exact path='/Account/Signin' component={Signin} />
                        <Route exact path='/Account/ForgivePassword' component={ForgivePassword} />
                        <Route exact path='/Timeline' component={Timeline} />
                        {/*<Route exact path='/Timeline/Article' component={Article} />
                        <Route exact path='/EditorTest' component={EditorTest} />
                        <Route exact path='/Timeline/Post' component={TimelinePost} />*/}
                    </div>
                </BrowserRouter>
            </Provider>
        );

    }
  
}

export default App;