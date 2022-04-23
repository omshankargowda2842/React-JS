import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from '../../../reactall/classEx/Component/Home'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                
                <div className="ml-auto">
                    <ul className="navbar-nav">

                        <li className="nav-item"><Link to="./Home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="./About" className="nav-link">About Us</Link></li>
                        <li className="nav-item"><Link to="./Service" className="nav-link">Services</Link></li>
                        <li className="nav-item"><Link to="./Contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar