import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';

import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div>
      <header className="">
      <h2>Livewell</h2>
      <div className="googleAuthHeader">
      <GoogleAuth/>   
      </div>
      </header>
             
                
            </div>
        );
    }
}

export default Header;