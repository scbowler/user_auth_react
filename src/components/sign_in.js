import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signIn, clearAuthError } from '../actions';
import { renderInput } from '../helpers';

class SignIn extends Component {

    componentWillUnmount(){
        this.props.clearAuthError();
    }

    handleSignIn(values) {
        this.props.signIn(values);
    }

    render() {

        const { handleSubmit, authError } = this.props;

        return (
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card grey lighten-2">
                        <div className="card-content">
                            <span className="card-title center">Sign In</span>
                            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                <Field name="email" label="Email" component={renderInput} />
                                <Field name="password" label="Password" component={renderInput} type="password" />
                                <div className="row right-align">
                                    <button className="btn grey darken-2">Sign In</button>
                                    <p className="right-align red-text text-darken-2">{authError}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const { email, password } = values;
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email address';
    }

    if (!password) {
        errors.password = 'Please choose a password';
    }

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

function  mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, { signIn, clearAuthError })(SignIn);
