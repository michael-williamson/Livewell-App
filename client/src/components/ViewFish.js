import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../styles/ViewFish.css';

import {fetchFish} from '../actions/index';

class ViewFish extends Component {

    componentDidMount(){
        this.props.fetchFish(this.props.id);
    }
    componentDidUpdate(prevProps){
        if(this.props.id !== prevProps.id){
        this.props.fetchFish(this.props.id);
        }
    }

    renderTable = () => {
        if(this.props.fish.length > 0){
            return this.props.fish.map(item => {
                return (
                        <Fragment>
                        <tbody>
                        <tr>
                            <td>{item.species}</td>
                            <td>{item.inches}</td>
                            <td>{item.pounds} {item.ounces}</td>
                        </tr>  
                        </tbody>            
                        </Fragment>    
                );
            });
        }
    }


    render() {
        console.log(this.props)
        return (
            <div>
                                    <table className="table">
                        <thead>
                        <tr class="header-row">
                            <th>Species</th>
                            <th>Length</th> 
                            <th>Weight</th>
                        </tr>  
                        </thead>
                {this.renderTable()}
                </table>
                <Link to="/options-menu" id="return-btn">Return</Link>
                <button id="edit-btn">Edit</button>
                <button  id="remove-btn">Remove</button>
                <button  id="finish-btn">Finish</button>               
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fish: state.fish,
        id: state.Auth.userId
    }
}

export default connect(mapStateToProps,{fetchFish})(ViewFish);