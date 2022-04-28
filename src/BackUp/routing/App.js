import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Home from '../../Dummy/Home'
import About from '../../Dummy/About'
import Contact from '../../Dummy/Contact'
import Service from '../../Dummy/Service'
const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='./Home' elements={<Home />} />
                    <Route path='./About' element={<About />} />
                    <Route path='./service' element={<Service />} />
                    <Route path='./contact' element={<Contact />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
