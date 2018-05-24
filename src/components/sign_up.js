import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from '../actions';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.renderInput = this.renderInput.bind(this);
    }

    renderInput({ input, label, type, meta: { error, touched } }){
        return (
            <div>
                <label>{label}</label>
                <input {...input} type={ type ? type : 'text'} />
                <p className="red-text text-darken-2">{ touched && error }</p>
            </div>
        )
    }

    handleSignUp(values){
        console.log('Sign Up Info:', values);

        this.props.signUp(values);
    }
    
    render(){

        const { handleSubmit } = this.props;

        return (
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card grey lighten-2">
                        <div className="card-content">
                            <span className="card-title center">Sign Up</span>
                            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                <Field name="email" label="Email" component={this.renderInput}/>
                                <Field name="password" label="Password" component={this.renderInput} type="password"/>
                                <Field name="confirmPassword" label="Confirm Password" component={this.renderInput} type="password"/>
                                <div className="row right-align">
                                    <button className="btn grey darken-2">Sign Up</button>
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

export default connect(null, { signUp })(SignUp);
