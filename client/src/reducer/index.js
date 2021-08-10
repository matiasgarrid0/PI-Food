import { getOrder } from "../controllers/getOrder";
import {getFilterDiet} from '../controllers/getFilterDiet';

const initialState = {
    recipesFilteredByDiet:[],
    recipes: [],
    allRecipes:[],
    filteredRecipes:[],
    recipeDiets:[],
    detail: {},
}

const recipeReducer = (state = initialState, {payload, type}) => {
    switch (type) {
     case 'GET_RECIPES':
         return{
             ...state,
             recipes: payload,
             allRecipes: payload,
         }
     case 'GET_ORDER':
         const arr = getOrder(payload, state.recipes);
         const newState = {
             ...state,
             filteredRecipes: arr,
         }
         return newState;
     case 'GET_RECIPE_DETAIL':
         return{
             ...state,
             recipeDetail: payload,
         }
    //  case 'FILTER_BY_DIET': 
    //       const Recipes = state.recipes  
    //     //   const statusFilter = payload === 'All' ? Recipes : Recipes.filter(e => e.diets === payload)
    //       return{
    //          ...state,
    //          recipes: getFilterDiet(payload, state.recipes),
    //       }
    case 'GET_RECIPE_NAME':
        return {
            ...state,
            recipes: payload
        }   
        case 'GET_RECIPE_DETAIL':
            return {
                ...state,
                detail: payload
            };   
             
     default:
        return state;  
    }
}
export default recipeReducer;