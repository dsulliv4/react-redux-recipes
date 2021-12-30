import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteRecipe } from '../../actions/recipeActions.js'

const DeleteRecipeButton = props => {

  function handleOnClick() {
   window.confirm("Are you sure you wish to delete this item?") &&
   props.deleteRecipe(props.id, props.history)
  }


    return (
      <div>
        <button onClick={handleOnClick} className="btn btn-outline-danger"> Delete</button>
      </div>
    )

}

export default withRouter(connect(null, { deleteRecipe })(DeleteRecipeButton));