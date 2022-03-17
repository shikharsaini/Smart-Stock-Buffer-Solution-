import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router";
class Navbar extends React.Component{
    
    render()
    {
        return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-6 p-4 mb-7 sticky-top" style={{borderBottomStyle:"solid",borderColor:"black"}}>
            <div className="container-fluid "  >
            <a className="navbar-brand mb-0 h4" style={{fontFamily:"Raleway",fontSize:"200%"}} href="#">SIH Team Elite</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-brand mb-0 h4" style={{fontFamily:"Raleway",fontSize:"220%",marginLeft:"25%"}}>Smart Buffer Stock Solution</div>
            <div className="collapse navbar-collapse mb-0 " id="navbarNav" style={{display: "flex", justifyContent: "end",float:"right",height:"100%",marginRight:"5%"}}>
                <ul className="navbar-nav" style={{height:"100%"}} >
                <li className="nav-item h5 box" >
                <div className="nav-link " ><Link to="/Home" className="link" style={{fontFamily:"Raleway",fontSize:"150%"}}>Home</Link></div>
                </li>
                <li className="nav-item  h5 box" >
                <div className="nav-link "  ><Link to="/ViewData" className="link" style={{fontFamily:"Raleway",fontSize:"150%"}}>View Data</Link></div>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        );
    }
}
export default Navbar;