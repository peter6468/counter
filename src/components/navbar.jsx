import React, { Component } from 'react';

//stateless functional component
//const NavBar = (props) => {
const NavBar = ({ totalCounters}) =>
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {""}
                 <span className="badge badge-pill badge-secondary">
                    {  totalCounters}
                </span>
            </a>
        </nav> 
     );
    };

 
export default NavBar; 

// ({}) used for destructing, sometimes we might have multiple references to the props we
//dont want to repeat .props .props, we can use obj destructing