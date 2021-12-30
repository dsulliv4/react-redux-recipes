import React from 'react'

const CreateRecipeButton = props => {

    return (
      <div>
        <button onClick={props.handleOnCreate} className="btn btn-outline-primary"> Create </button>
      </div>
    )

}

export default CreateRecipeButton;