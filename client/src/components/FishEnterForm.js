import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom'

import {createFish} from '../actions/index';

class FishEnterForm extends Component {


    renderSelectInput = ({input,iterations}) => {
      return (
        <select {...input}>
          <option/>
          {Array.from({length:iterations}).map((element,index)=><option>{index}</option>)}
        </select>
      );
    }

    onSubmit = (formValues) => {
      this.props.createFish(formValues,this.props.id);
  }


    render() { 
      console.log(this.props)
        return (
            <div>
                    <form id="fish-info-form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
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
  
      <button id="submit-fish" type="submit" >Add Fish</button> 
      <Link to="/options-menu" id="cancel">Cancel</Link> 
    </form>
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
  return {
      formData: state.form,
      id: state.Auth.userId

  }
} 

export default connect(mapStateToProps,{createFish})(reduxForm({form:'enterFishForm'})(FishEnterForm));