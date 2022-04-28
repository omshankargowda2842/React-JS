
import React from 'react'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Home from './Dummy/Home'
import About from './Dummy/About'
import Service from './Dummy/Service'
import Contact from './Dummy/Contact'
import Navbar from './Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
          <Switch>
             <Route path='./home' component={Home } />
             <Route path='./about' component={About } />
             <Route path='./service' component={Service } />
             <Route path='./contact' component={Contact } />
          </Switch>
        </Router>
    </div>
  )
}

export default App