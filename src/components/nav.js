import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions';

class Nav extends Component {
    renderLinks(){
        const { auth, signOut } = this.props;

        if(auth){
            return (
                <Fragment>
                    <li>
                        <Link to="/movie-quote">Movie Quote</Link>
                    </li>
                    <li>
                        <Link to="/secret-doc">Secret Doc</Link>
                    </li>
                    <li>
                        <Link to="/operative-list">Operative List</Link>
                    </li>
                    <li>
                        <button onClick={signOut} className="btn grey darken-2">Sign Out</button>
                    </li>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        );
    }

    render(){
        return (
            <nav className="blue-grey" style={{ padding: '0 12px' }}>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">AIC DATA</Link>
                    <ul className="right ">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { signOut })(Nav);
