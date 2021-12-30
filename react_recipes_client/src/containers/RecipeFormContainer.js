import React, { Component } from 'react'
import RecipeInput from '../components/Forms/MealInput';

// in refactoring, what's ridiculous is that this container
// is now contained in another container
class RecipeFormContainer extends Component {
  render() {
    if (this.props.editing === true){
      return (
        <div className="container">
          <div>
            <br/>
              <h3>Make Changes</h3>
            <br/>
          </div>

          <RecipeInput
            onUpdateSubmit={this.props.onUpdateSubmit} 
            editing={this.props.editing} 
            name={this.props.name} 
            category={this.props.category} 
            description={this.props.description} 
            image={this.props.image} 
            vegan={this.props.vegan}
            id={this.props.id} 
          />
          
      </div>
      )
    } else {
      return (
        <div className="container">
          <div>
            <br/>
              <h3>Create a new Meal</h3>
            <br/>
          </div>
          <RecipeInput
            name={this.props.name} 
            category={this.props.category} 
            description={this.props.description} 
            image={this.props.image} 
            vegan={this.props.vegan} 
          />
        </div>
      )
    }
  }
}

export default RecipeFormContainer 