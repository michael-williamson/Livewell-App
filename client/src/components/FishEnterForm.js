import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import '../styles/FishEnterForm.css';

import {createFish} from '../actions/index';

class FishEnterForm extends Component {

  required = value => value ? undefined : 'Required'

    renderSelectInput = ({input,iterations,meta:{touched,error,warning}}) => {
      return (
        <div style={{position:'relative',display:'inline-block'}}>
          <select {...input}>
            <option/>
            {Array.from({length:iterations}).map((element,index)=><option>{index}</option>)}
          </select>
          {touched &&
          ((error && <span style={{color:'red'}} className="selectSpan">{error}</span>)||
          (warning && <span style={{color:'red'}} className="selectSpan">{warning}</span>))}
        </div>
      );
    }

    //had to name and create this one special because the select input is different 
    renderSpeciesInput = ({input,meta:{touched,warning,error}}) => {
      return (
        <div style={{position:'relative',display:'inline-block'}}>
          <select id="species" {...input}>
            <option/>
            <option>Largemouth Bass</option>
            <option>Bluegill</option>
            <option>White Perch</option>
            <option>Catfish</option>
          </select>
          {touched &&
          ((error && <span style={{color:'red'}} className="selectSpan">{error}</span>)||
          (warning && <span style={{color:'red'}} className="selectSpan">{warning}</span>))}
        </div>
      );
    }

    onSubmit = (formValues) => {
      this.props.createFish(formValues,this.props.id);
  }

    submitValidation = () => {
      if(!this.props.valid || this.props.pristine){
          return true
      
      }else{return false}
    }

    render() { 
        return (
            <div>
              <form className="fish-info-form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <label class="species-label" for="species">Species:</label>  
                <Field name="species" id="species" component={this.renderSpeciesInput} validate={[this.required]}/> 
                <label for="length">Length:</label>
                <Field name="inches" component={this.renderSelectInput} iterations="37" validate={[this.required]}/> 
                <span> inches</span>
                <label for="weight">Weight:</label>
                <Field name="pounds" component={this.renderSelectInput} iterations="50" validate={[this.required]}/>
                <span> lbs</span>
                <Field name="ounces" component={this.renderSelectInput} iterations="17" validate={[this.required]}/>
                <span> ounces</span>
                <div style={{position:'relative'}}>
                <button id="submit-fish" type="submit" disabled={this.submitValidation()} onClick={this.disableMessage}>Add Fish</button>
                <span className={this.props.valid ? "hideForGood": "hide"}>You must enter all fields before submitting</span>
                <Link to="/options-menu" id="cancel">Cancel</Link> 
                </div>
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