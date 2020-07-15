import React, { Component } from 'react';

import FishEnterForm from './FishEnterForm';
import '../styles/FishEnter.css';

import requireAuth from './requireAuth';

class FishEnter extends Component {
    render() {
        return (
            <div className="main">
                <FishEnterForm/>
            </div>
        );
    }
}

export default requireAuth(FishEnter);