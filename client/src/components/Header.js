import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';

class Header extends Component {
    render() {
        return (
            <div>
      <header className="">
      <h2>Livewell</h2>
      <GoogleAuth/>   
      </header>
             
                
            </div>
        );
    }
}

export default Header;