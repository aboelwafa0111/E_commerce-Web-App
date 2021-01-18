import React from 'react';
import { Link, NavLink } from "react-router-dom";
// we can convert this class from 

/*
class NavBar extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <nav className ="navbar navbar-dark bg-dark">
                    <a className ="navbar-brand mb-0 h1">Navbar</a>
                   <span className="badge badge-primary">{this.props.productsCout}</span>
                </nav>
            </React.Fragment>
         );
    }
}
*/

// to to make it (statless function components)

// don't forget to call props in the arow function parameter
// dont't forget to delete all (this.) words from the code inside the function 
const NavBar = props => {

    const classes = (props.productsCout === 0) ? "badge badge-danger text-light" : "badge badge-primary text-light";

    return (              
        <React.Fragment>
            <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* we could replace <a> tag with <Link> after importing the dependency on the top of the code page and replace href attr with to attr */}
                    <Link className ="navbar-brand mb-0 h1" to="/">Shopping Cart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/cart">
                                    Shopping Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <span className={classes}>{props.productsCout}</span>
                </div>
            </nav>
        </React.Fragment>        
    );
}

export default NavBar;