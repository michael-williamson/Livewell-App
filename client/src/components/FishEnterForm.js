import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';

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
      <select name="species" id="species"> 
        <option value="Largemouth Bass">Largemouth Bass</option>
        <option>Bluegill</option>
        <option>White Perch</option>
        <option>Catfish</option>
      </select>
      <label for="length">Length:</label>
       <Field name="inches" component={this.renderSelectInput} iterations="37"/> 
       <span> inches</span>
      <label for="weight">Weight:</label>
        <Field name="pounds" component={this.renderSelectInput} iterations="50"/>
      <span> lbs</span>
          <Field name="ounces" component={this.renderSelectInput} iterations="17"/>
      <span> ounces</span>
  
      <button id="submit-fish" type="button" >Add Fish</button> 
      <button type="reset" id="cancel">Cancel</button> 
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