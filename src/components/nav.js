import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';

class Nav extends Component {
    renderLinks(){
        const { auth, changeAuth } = this.props;
        const btnStyle = {
            width: '131px'
        };

        if(auth){
            return (
                <Fragment>
                    <li>
                        <Link to="/secret-doc">Secret Doc</Link>
                    </li>
                    <li>
                        <Link to="/operative-list">Operative List</Link>
                    </li>
                    <li>
                        <button style={btnStyle} className="btn red darken-2" onClick={() => changeAuth(false)}>Sign Out</button>
                    </li>
                </Fragment>
            );
        }

        return (
            <li>
                <button style={btnStyle} className="btn grey" onClick={() => changeAuth(true)}>Sign In</button>
            </li>
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

export default connect(mapStateToProps, { changeAuth: changeAuth })(Nav);
