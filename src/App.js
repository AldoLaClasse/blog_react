import './App.css';
import Home from './Home'
import NavBar from './NavBar'
import Add from './Add'
import BlogDetail from './BlogDetail'
import FausseRoute from './FausseRoute'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {

  return (
    <div className="home">
      <Router>
        <div className="App">
          <NavBar />
          <div className="contenu">
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/add'>
                <Add />
              </Route>
              <Route exact path='/blogs/:id'>
                <BlogDetail />
              </Route>     
              <Route path='*'>
                <FausseRoute />
              </Route>            
            </Switch>
          </div>
        </div>

      </Router>


    </div>
  )

}

export default App;