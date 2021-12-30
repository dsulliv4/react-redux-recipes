import React from 'react'
import RecipeForm from './RecipeForm'
import UpdateRecipeButton from '../Buttons/UpdateRecipeButton'

const UpdateRecipe = (props) => {

    return (
      <form onSubmit={props.handleOnUpdate}>
        <div className='card text-center shadow'>
          <RecipeForm 
            handleOnUpdate={props.handleOnUpdate}
            handleOnChange={props.handleOnChange}
            handleOnSelect={props.handleOnSelect}
            name={props.name} 
            editing={props.editing} 
            category={props.category} 
            description={props.description} 
            image={props.image} 
            vegan={props.vegan}
            id={props.id}
            errors={props.errors} 
          />
          <UpdateRecipeButton />
        </div>
      </form>
    )
}

export default UpdateRecipe