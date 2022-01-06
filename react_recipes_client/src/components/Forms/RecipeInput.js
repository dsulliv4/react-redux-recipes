import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { createRecipe, updateRecipe } from '../../actions/recipeActions.js'
import UpdateRecipe from './UpdateRecipe.js'
import CreateRecipe from './CreateRecipe.js'

export class RecipeInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name || "",
      category: props.category ||"",
      description: props.description || "",
      vegan: props.vegan || false,
      image: props.image || "",
      errors: {}, 
      editing: props.editing || false
    }
  } 
   
    handleOnChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    handleOnSelect(e) {
      
      if (this.state.vegan === false) {
        this.setState({
          vegan: true
      })
    } else {
        this.setState(
        {
          vegan: false
        })
      }
    }
    
    
    handleOnCreate = (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const recipeData = {
          recipe: tempState
        };
        console.log('a')
        this.props.createRecipe(recipeData, this.props.history);
        console.log('e')}
      };
    

    handleOnUpdate =(e) => {
      debugger;
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const tempRecipe = {
          recipe: tempState
        };
        
        console.log('calling onUpdateSubmit')
        this.props.onUpdateSubmit();
        
        this.props.updateRecipe(this.props.id, tempRecipe);
       
      }
      };

      
    render() { 
        if (this.state.editing === true ) {
          return (
              <UpdateRecipe
                handleOnUpdate={this.handleOnUpdate.bind(this)}
                handleOnChange={this.handleOnChange.bind(this)}
                handleOnSelect={this.handleOnSelect.bind(this)} 
                editing={this.state.editing} 
                name={this.state.name} 
                category={this.state.category} 
                description={this.state.description} 
                image={this.state.image} 
                vegan={this.state.vegan}
                id={this.state.id}
                errors={this.state.errors}          
              />
          )
        } else {  
        return (
            <CreateRecipe
              handleOnCreate={this.handleOnCreate.bind(this)}
              handleOnChange={this.handleOnChange.bind(this)}
              handleOnSelect={this.handleOnSelect.bind(this)}
              editing={this.state.editing} 
              name={this.state.name} 
              category={this.state.category} 
              description={this.state.description} 
              image={this.state.image} 
              vegan={this.state.vegan}
              id={this.state.id}
              errors={this.state.errors}          
              />
        );
      };
    }

    validateForm = () => {
    
      let formIsValid = true
      let errors = {}
    
    if (!this.state.name) {
      formIsValid = false
      errors['name'] = '*Please enter a name for this meal'
      document.querySelector('div.errorMsg').parentNode.scrollIntoView({ behavior: 'smooth' })
    }
    

    this.setState({ errors })
    
    return formIsValid
    }
};


export default withRouter(connect(null, { createRecipe, updateRecipe})(RecipeInput));