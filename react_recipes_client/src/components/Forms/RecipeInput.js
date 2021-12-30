import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { createRecipe, updateRecipe } from '../../actions/recipeActions.js'
import MealFormUpdating from './RecipeFormUpdating'
import MealFormCreating from './RecipeFormCreating'


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
      // a poorly abstracted toggle. however, it suffices as a method. 
      // Yet, if there are many checkboxes, 
      // do I need to do it for each case? 
      // Yes, so I need to make this dynamic...
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
    
    // console logging here to make sure asyc react is correct...
    // handles creation of new object, dispatches to backend...
    handleOnCreate = (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const mealData = {
          meal: tempState
        };
        console.log('a')
        this.props.createRecipe(recipeData, this.props.history);
        console.log('e')}
      };
    // these two look earily similar, thus can be refactored into one.
    // how exactly--will it require changing a lot of props now, and variables...

    handleOnUpdate =(e) => {
      debugger;
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const tempMeal = {
          meal: tempState
        };
        // onEdingChange is passed down from MealCard as Parent
        // this is double to ensure that editing is no longer true in any state anywhere in application
        console.log('calling onUpdateSubmit')
        this.props.onUpdateSubmit();
        // onUpdateSubmit basically only changes state.editing of parent (MealCard)
        // back from to false, as we are no longer editing. now its up to the servers to do their async magics...
        console.log('a')
        this.props.updateRecipe(this.props.id, tempRecipe);
        console.log('e')
      }
      };

      
    render() { 
        if (this.state.editing === true ) {
          return (
              <RecipeFormUpdating
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
            <RecipeFormCreating
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
    // ok, but if you only have one validation on front end
    // and no validations of errors being sent anywhere receive on front end...jams up before being sent

    this.setState({ errors })
    
    return formIsValid
    }
};


export default withRouter(connect(null, { createRecipe, updateRecipe})(RecipeInput));