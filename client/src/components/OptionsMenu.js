import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/OptionsMenu.css';

class OptionsMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/view-fish"  className="view-fish" >View Fish</Link>
                <Link to="/fish-enter" className="add-fish-info">Add a Fish</Link>
            </div>
        );
    }
}

export default OptionsMenu;