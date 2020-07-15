import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount(){
            this.shouldNavigateAway()
        }
        
        componentDidUpdate(){
            this.shouldNavigateAway()
        }

        shouldNavigateAway(){
            if(!this.props.auth?.isSignedIn){
                this.props.history.push('/');
            }
        }

        render(){
            return <ChildComponent {...this.props}/>
        }
    }
    const mapStateToProps = (state) => {
        return {
            auth: state.Auth
        }
    }

    return connect(mapStateToProps)(ComposedComponent); 
}