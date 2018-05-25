import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signUp, clearAuthError } from '../actions';
import { renderInput } from '../helpers';

class SignUp extends Component {

    handleSignUp(values){
        this.props.signUp(values);
    }

    componentWillUnmount(){
        this.props.clearAuthError();
    }
    
    render(){

        const { handleSubmit, authError } = this.props;

        return (
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card grey lighten-2">
                        <div className="card-content">
                            <span className="card-title center">Sign Up</span>
                            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                <Field name="email" label="Email" component={renderInput}/>
                                <Field name="password" label="Password" component={renderInput} type="password"/>
                                <Field name="confirmPassword" label="Confirm Password" component={renderInput} type="password"/>
                                <div className="row right-align">
                                    <button className="btn grey darken-2">Sign Up</button>
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

function validate(values){
    const { email, password, confirmPassword } = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email address';
    }

    if(!password){
        errors.password = 'Please choose a password';
    }

    if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, { signUp, clearAuthError })(SignUp);
