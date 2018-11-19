import React, { Component} from 'react';
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.png';

class NavBar extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="nav-logo-cont">
                    <a href="/"><img src={logo} alt="pokemon logo"/></a>
                    <p>Simple Pokemon Sorting App</p>
                </div>
            </div>
        );
    }
}

export default NavBar;