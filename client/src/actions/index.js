import axios from 'axios';
import { RECIPES_URL, RECIPE_NAME, RECIPES_ID } from '../utils/constants';

export const getAllRecipes = () => async(dispatch)=>{
    try{
        const res = await axios.get(RECIPES_URL);
        console.log(res.data)
        dispatch({type: 'GET_RECIPES', payload: res.data});
    }catch(err){
        console.log(err);
    }
}
export const getOrder = (order) => (dispatch) => {
    dispatch({type: 'GET_ORDER', payload: order});
    console.log(order)
};
export const filterByDiet = (payload) => {
    console.log(payload)
  return{
      type: 'FILTER_BY_DIET',
      payload
  }
}
// export const getRecipeDetail = (id) => async (dispatch) => {
//    try{
//     const res = await axios.get( RECIPES_ID + id);
//     dispatch({type: 'GET_RECIPE_DETAIL', payload: res.data});

//    }catch(err){
//     dispatch({type: 'GET_RECIPE_DETAIL', payload: []});
//    }
// }
export const getRecipeName = (name) => async (dispatch) => {
    try{
        const res = await axios.get(RECIPE_NAME + name);
        dispatch({type: 'GET_RECIPE_NAME', payload: res.data});
    }catch (err){
     dispatch({type: 'GET_RECIPE_NAME', payload: []});
    }
}
export const getRecipesDetail = (id) => async (dispatch) => {
	try {
		const res = await axios.get(RECIPES_ID + id);
		dispatch({type: 'GET_RECIPE_DETAIL', payload: res.data});
		console.log(res.data)
	} catch (err) {
		dispatch({type: 'GET_RECIPE_DETAIL', payload:'no entro la data' });
	}
};
// export const getByDiet = (diets) => async (dispatch) => {
//     const res = await axios.get(RECIPES_URL);
//     if (diets) {
//         Array.isArray(res.data) && (res.data = res.data.filter(c => c.diets === diets))
//     }
//     dispatch({type: 'GET_RECIPES', payload: res.data});
// }