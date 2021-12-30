import React from 'react'
import RecipeForm from './RecipeForm'
import CreateRecipeButton from '../Buttons/CreateRecipeButton'

const CreateRecipe = (props) => {
  
    return (
      <form onSubmit={props.handleOnCreate}>
        <div className='card text-center shadow' >
          <RecipeForm
            handleOnCreate={props.handleOnCreate}
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
          <CreateRecipeButton handleOnCreate={props.handleOnCreate} />
        </div>
      </form>
    )
}

export default CreateRecipe