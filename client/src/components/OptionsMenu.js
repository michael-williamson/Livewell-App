import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/OptionsMenu.css';

import requireAuth from './requireAuth';

class OptionsMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/view-fish"  className="view-fish" >View Fish</Link>
                <Link to="/fish-enter" className="add-fish-info">Add Fish</Link>
                <Link to="/" className="return-main">Main page</Link>
            </div>
        );
    }
}

export default requireAuth(OptionsMenu);