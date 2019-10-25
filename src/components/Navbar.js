import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function Navbar(props){
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/add">Add User</Link>
                </li>
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Default App"
}
export default Navbar;