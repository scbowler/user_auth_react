import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link style={{marginLeft: '10px'}} to="/" className="brand-logo">AIC DATA</Link>
                    <ul className="right ">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/secret-doc">Secret Doc</Link>
                        </li>
                        <li>
                            <Link to="/operative-list">Operative List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
