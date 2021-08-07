import { getOrder } from "../actions";

const initialState = {
    recipes: [],
    filteredRecipes:[],
}

const recipeReducer = (state = initialState, {payload, type}) => {
    switch (type) {
     case 'GET_RECIPES':
         return{
             ...state,
             recipes: payload,
         }
     case 'GET_ORDER':
         const arr = getOrder(payload, state.recipes);
         const newState = {
             ...state,
             filteredRecipes: arr,
         }
         return newState;
             
     default:
        return state;  
    }
}
export default recipeReducer;