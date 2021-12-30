import React, { Component } from 'react'
import RecipeCard from '../components/Recipes/RecipeCard';
import { connect } from 'react-redux'

import cuid from 'cuid';
export const cuidFn = cuid;

class RecipeListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mealFilter: ""
    }
  }

  handleSearch = (e) => {
    this.setState({
      recipeFilter: e.target.value
    })

  }


  queryRecipes = () => {
    let findAlike = this.state.recipeFilter.toLowerCase()
    return this.props.recipes.filter ((meal) => 
      recipe.name.toLowerCase().includes(findAlike) || recipe.description.toLowerCase().includes(findAlike) || recipe.category.toLowerCase().includes(findAlike)
    ).sort(function(a,b){return (a.id - b.id)})
  }

  render () {
    if (this.props.loading) {
        return <div className="container">This may take a few seconds...</div>
      }
    else {
      const recipeList = this.queryRecipes().map ((meal) => {
        return (
         <div className="col-md-4" id={meal.id}>
            <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name} 
            category={recipe.category} 
            description={recipe.description}
            imgsrc={recipe.image}
            vegan={recipe.vegan}
            contains_nuts={recipe.contains_nuts}
            contains_dairy={recipe.contains_dairy}
            />
          </div>
        )
      })

      return(
        <div>
          <span className="align-middle">
            <h1 className="text-center">All Meals</h1>
            <div className="container-fluid d-flex justify-content-center" >
              <div className='card text-center shadow' >
                <label htmlFor="Search">Search by Name: </label>
                <input type="text" id="filter" value={this.state.mealFilter} onChange={this.handleSearch} />
              </div>
            </div>
          </span>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              { mealsList }
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch ({type: "DELETE_MEAL", id})
})

const mapStateToProps = state => {
  return {
      meals: state.mealsReducer.meals,
      loading: state.mealsReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer);