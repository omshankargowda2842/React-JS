import React from 'react'

class Navbar extends React.Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="/home" className="navbar-brand">state  example</a>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-item">
                         <a className="nav-link" href="/home">Home</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contacts"> Contacts </a></li>
                </ul>
            </div>
        </nav>
    }
}

export default Navbar