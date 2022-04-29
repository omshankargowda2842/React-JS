
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Dummy/Home.jsx'
import About from './Dummy/About.jsx'
import Service from './Dummy/Service.jsx'
import Contact from './Dummy/Contact.jsx'
import Navbar from './Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
             <Route path='/home' component={Home} />
             <Route path='/about' component={About } />
             <Route path='/service' component={Service } />
             <Route path='/contact' component={Contact } />
          </Switch>
        </Router>
    </div>
  )
}

export default App