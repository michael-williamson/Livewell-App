import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';

import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="headerDiv">
                <header>
                    <h2>Livewell App</h2>
                    <div className="googleAuthHeader">
                        <GoogleAuth/>   
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;