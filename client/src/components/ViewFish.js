import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/ViewFish.css';

class ViewFish extends Component {
    render() {
        return (
            <div>
                <table id="table">
                
                <tr class="header-row">
                    <th>Species</th>
                    <th>Length</th> 
                    <th>Weight</th>
                </tr>
                
                </table>
                <Link to="/options-menu" id="return-btn">Return</Link>
                <button id="edit-btn">Edit</button>
                <button  id="remove-btn">Remove</button>
                <button  id="finish-btn">Finish</button>               
            </div>
        );
    }
}

export default ViewFish;