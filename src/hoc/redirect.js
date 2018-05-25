import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent, route = '/'){
    class Redirect extends Component {
        componentDidMount(){
            if(this.props.auth){
                this.props.history.push(route);
            }
        }

        componentWillReceiveProps(nextProps){
            if(nextProps.auth){
                this.props.history.push(route);
            }
        }

        render(){
            return <WrappedComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Redirect);
}
