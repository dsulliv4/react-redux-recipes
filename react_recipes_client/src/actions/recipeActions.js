const BASE_URL = "http://localhost:3001";


const LOADING = { type: "LOADING" };

const addRecipe = (recipe) => {
  console.log("addedRecipe", recipe)
  return {
      type: "ADD_RECIPE",
      recipe
  }
}

const updateRecipeCard = (updatedRecipe) => {
  console.log('g')
  return{
    type: "UPDATE_RECIPE",
    updatedRecipe
  }
}

const deleteRecipeFromRecipes = (recipeId) => {
  return {
    type: "DELETE_RECIPE",
    recipeId
  }
}

export const fetchRecipes = () => {

  return (dispatch) => {
    dispatch(LOADING);

    fetch(BASE_URL + "/recipes")
      .then((resp) => resp.json())
      .then((recipes) => dispatch({ type: "LOAD_RECIPES", recipes }));
  };
}

export const createRecipe = (recipeData, history) => {
  return (dispatch) => {
      fetch(BASE_URL + "/recipes", {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipeData)
      })
          .then( resp => resp.json() )
          .then( recipe => {
          
              dispatch(addRecipe(recipe));
              history.push('/recipes');
          })
      
  }
}

export const updateRecipe = (recipeId, tempRecipe) => {

  return (dispatch) => {
    
      fetch(BASE_URL + 'recipes/' + `${recipeId}`, {
          method: "PATCH",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(tempRecipe)
      })
          .then( resp => resp.json() )
          .then( updatedRecipe => {
              
              dispatch(updateRecipeCard(updatedRecipe));
          })
        
  }

}

export const deleteRecipe = (recipeId) => {
  return (dispatch) => {
      fetch(BASE_URL + '/recipe/' + recipeId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteRecipeFromRecipes(recipeId))
        }
      });
  };
};