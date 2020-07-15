import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import requireAuth from './requireAuth';

import '../styles/NoMatch.css';

class NoMatch extends Component {
    render() {
        return (
            <div className="noMatchDiv">
                <h1>Invalid Path</h1>
                <Link to="/">Back to Main Page</Link>
            </div>
        );
    }
}

export default requireAuth(NoMatch);