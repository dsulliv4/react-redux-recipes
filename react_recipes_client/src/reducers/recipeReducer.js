const initialState = {
  loading: true,
  recipes: []
};

export default (state=initialState, action) => {
  switch(action.type){
    case "LOADING":
      return {...state, loading: true};
    case "LOAD_RECIPES":
      return {...state, loading: false, recipes: action.recipes};
    case "ADD_RECIPE":
      return {...state, loading: false, recipes: [...state.recipes, action.recipe]};
      case "DELETE_RECIPE":
        const filteredRecipes = state.recipes.filter(recipe => recipe.id !== action.recipeId)
        return { ...state, recipes: filteredRecipes }
      case "UPDATE_RECIPE":
        let updatedRecipe = action.updatedRecipe
        let reFilteredRecipes = state.recipes.filter(recipe => recipe.id !== updatedRecipe.id)
        reFilteredRecipes.push(action.updatedRecipe)
        return { ...state, recipes: reFilteredRecipes }
    default:
      return state;
  };
};