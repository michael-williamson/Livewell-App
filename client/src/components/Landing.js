import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';
import {Link} from 'react-router-dom';

import '../styles/Landing.css';

class Landing extends Component {
    render() {
        return (
            <div className="landingPage">
               <h1>Welcome to the Livewell App</h1>
               <h3>Keeping up with your catch</h3>
               <p>Livewell app offers a fast method to keep and updated livewell according to your fishing needs
                    Just sign in to get started! Or just go to livewell <Link to="/view-fish">here</Link>
               </p>
            </div>
        );
    }
}

export default Landing;