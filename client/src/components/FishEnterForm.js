import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'

class FishEnterForm extends Component {


    renderSelectInput = ({input,iterations}) => {
      return (
        <select {...input}>
          <option/>
          {Array.from({length:iterations}).map((element,index)=><option>{index}</option>)}
        </select>
      );
    }


    render() { 
        return (
            <div>
                    <form id="fish-info-form" >
      <label class="species-label" for="species">Species:</label>  
      <Field name="species" id="species" component="select"> 
        <option/>
        <option>Largemouth Bass</option>
        <option>Bluegill</option>
        <option>White Perch</option>
        <option>Catfish</option>
      </Field>
      <label for="length">Length:</label>
       <Field name="inches" component={this.renderSelectInput} iterations="37"/> 
       <span> inches</span>
      <label for="weight">Weight:</label>
        <Field name="pounds" component={this.renderSelectInput} iterations="50"/>
      <span> lbs</span>
          <Field name="ounces" component={this.renderSelectInput} iterations="17"/>
      <span> ounces</span>
  
      <button id="submit-fish" type="button" >Add Fish</button> 
      <Link to="/options-menu" id="cancel">Cancel</Link> 
    </form>
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
  return {
      formData: state.form
  }
} 

export default reduxForm({form:'enterFishForm'})(FishEnterForm);