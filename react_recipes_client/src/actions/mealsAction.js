const BASE_URL = "http://localhost:3001";
// for production use:
// const BASE_URL = "https://meals-prepped-backend.herokuapp.com/";

const LOADING = { type: "LOADING" };

const addMeal = (meal) => {
  console.log('g')
  return {
      type: "ADD_MEAL",
      meal
  }
}

const updateMealCard = (updatedMeal) => {
  console.log('g')
  return{
    type: "UPDATE_MEAL",
    updatedMeal
  }
}

const deleteMealFromMeals = (mealId) => {
  return {
    type: "DELETE_MEAL",
    mealId
  }
}

export const fetchMeals = () => {

  return (dispatch) => {
    dispatch(LOADING);

    fetch(BASE_URL + "/meals")
      .then((resp) => resp.json())
      .then((meals) => dispatch({ type: "LOAD_MEALS", meals }));
  };
}

export const createMeal = (mealData, history) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
      fetch(BASE_URL + "/meals", {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(mealData)
      })
          .then( resp => resp.json() )
          .then( meal => {
              console.log('f')
              dispatch(addMeal(meal));
              history.push('/meals');
          })
        console.log('d')
  }
}

export const updateMeal = (mealId, tempMeal) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
      fetch(BASE_URL + "/meals/" + `${mealId}`, {
          method: "PATCH",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(tempMeal)
      })
          .then( resp => resp.json() )
          .then( updatedMeal => {
              console.log('f')
              dispatch(updateMealCard(updatedMeal));
          })
        console.log('d')
  }

}

export const deleteMeal = (mealId) => {
  return (dispatch) => {
      fetch(BASE_URL + '/meals/' + mealId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteMealFromMeals(mealId))
        }
      });
  };
};