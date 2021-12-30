import React, { Component } from 'react'
import DeleteRecipeButton from '../Buttons/DeleteRecipeButton.js'
import EditRecipeButton from '../Buttons/EditRecipeButton'
import RecipeDescription from './RecipeDescription.js'
import MealFormContainer from '../../containers/RecipeFormContainer.js'
import './card-style.css'


export class MealCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  handleEditing = () => {
    let num = this.props.id
    document.getElementById(num).scrollIntoView({ behavior: 'smooth' })
    this.setState ({
      editing: true
    })
  }
  handleUpdateSubmit = () => {
    let num = this.props.id
    document.getElementById(num).scrollIntoView({ behavior: 'smooth' })
    console.log('setting editing back to false')
    this.setState ({
      editing: false
    })
  }
  render() {
 
    if (this.state.editing) {
      return (
        <div className='card text-center shadow'>
                < RecipeFormContainer
                onUpdateSubmit={this.handleUpdateSubmit}
                editing={this.state.editing}
                name={this.props.name} 
                category={this.props.category} 
                description={this.props.description} 
                image={this.props.imgsrc} 
                vegan={this.props.vegan}
                id={this.props.id}
                />
        </div>
      )
    }
    return(
      <div className='card text-center shadow'>
        <div className="overflow">
         
          <img src={this.props.imgsrc} alt={`${this.props.name}`} className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <RecipeDescription 
            name={this.props.name}
            category={this.props.category}
            description={this.props.description} 
            vegan={this.props.vegan}
            nuts={this.props.contains_nuts}
            dailry={this.props.contains_dairy}
            />
          <DeleteRecipeButton  deleteMeal={this.props.deleteMeal} id={this.props.id}/>
         
          <EditRecipeButton handleEditing={this.handleEditing}/>
        </div>
      </div>
    );
  }
}

export default RecipeCard;