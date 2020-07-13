import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FishEnterForm from './FishEnterForm';
import '../styles/FishEnter.css';

class FishEnter extends Component {
    render() {
        return (
            <div className="main">
                <FishEnterForm/>
            </div>
        );
    }
}

export default FishEnter;