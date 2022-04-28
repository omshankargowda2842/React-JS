import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
render(){
    return<>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg text-white">
        <Link to="./home" className="navbar-brand">react-router-dom</Link>
          <div className="ml-auto">
           <ul className=" navbar-nav">
               <li className="nav-item" ><Link className="nav-link" to="./home.js">Home</Link></li>
               <li className="nav-item" ><Link className="nav-link" to="./about">About</Link></li>
               <li className="nav-item" ><Link className="nav-link" to="./contact">Contact</Link></li>
               <li className="nav-item" ><Link className="nav-link" to="./service">Service</Link></li>
           </ul>
          </div>
    </nav>
    </>
}
}
export default Navbar