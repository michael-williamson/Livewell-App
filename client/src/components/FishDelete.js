import React, { Component } from 'react';
import Modal from './Modal';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {deleteFish} from '../actions/index';

class FishDelete extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <Modal deleteFish={this.props.deleteFish} id={this.props.match.params.id} googleId={this.props.auth.userId}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    auth: state.Auth
    }
}

export default withRouter(connect(mapStateToProps,{deleteFish})(FishDelete));