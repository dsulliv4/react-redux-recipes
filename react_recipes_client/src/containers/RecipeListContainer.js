import React, { Component } from 'react'
import RecipeCard from '../components/Recipes/RecipeCard';
import { connect } from 'react-redux'

import cuid from 'cuid';
export const cuidFn = cuid;

class RecipeListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeFilter: ""
    }
  }

  handleSearch = (e) => {
    this.setState({
      recipeFilter: e.target.value
    })

  }


  queryRecipes = () => {
    let findAlike = this.state.recipeFilter.toLowerCase()
    return this.props.recipes.filter ((recipe) => 
      recipe.name.toLowerCase().includes(findAlike) || recipe.description.toLowerCase().includes(findAlike) || recipe.category.toLowerCase().includes(findAlike)
    ).sort(function(a,b){return (a.id - b.id)})
  }

  render () {
    const recipesQueries = this.queryRecipes();
    if (this.props.loading) {
        return <div className="container">This may take a few seconds...</div>
      }
    else {
      const recipeList = recipesQueries.length > 0 && recipesQueries.map((recipe) => {
        return (
         <div className="col-md-4" id={recipe.id} key={recipe.id}>
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
                <input type="text" id="filter" value={this.state.recipeFilter} onChange={this.handleSearch} />
              </div>
            </div>
          </span>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              { recipeList }
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch ({type: "DELETE_RECIPE", id})
})

const mapStateToProps = state => {
  return {
      recipes: state.recipeReducer.recipes,
      loading: state.recipeReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer);