import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import '../styles/FishEnterForm.css';

import {createFish} from '../actions/index';

class FishEnterForm extends Component {


  required = value => value ? undefined : 'Required'

    renderSelectInput = ({input,iterations,meta:{touched,error,warning}}) => {
      return (
        <div>
          <select {...input}>
            <option/>
            {Array.from({length:iterations}).map((element,index)=><option>{index}</option>)}
          </select>
          {/* {touched &&
          ((error && <span style={{color:'red'}}>{error}</span>)||
          (warning && <span style={{color:'red'}}>{warning}</span>))} */}
        </div>
      );
    }

    onSubmit = (formValues) => {
      this.props.createFish(formValues,this.props.id);
  }


    render() { 
        return (
            <div>
              <form className="fish-info-form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <label class="species-label" for="species">Species:</label>  
                <Field name="species" id="species" component="select" validate={[this.required]}> 
                  <option/>
                  <option>Largemouth Bass</option>
                  <option>Bluegill</option>
                  <option>White Perch</option>
                  <option>Catfish</option>
                </Field>
                <label for="length">Length:</label>
                <Field name="inches" component={this.renderSelectInput} iterations="37" validate={[this.required]}/> 
                <span> inches</span>
                <label for="weight">Weight:</label>
                <Field name="pounds" component={this.renderSelectInput} iterations="50" validate={[this.required]}/>
                <span> lbs</span>
                <Field name="ounces" component={this.renderSelectInput} iterations="17" validate={[this.required]}/>
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