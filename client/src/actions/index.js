import axios from 'axios';
import { RECIPES_URL, RECIPE_NAME, RECIPES_ID, DIETS_URL } from '../utils/constants';

export const getAllRecipes = () => async(dispatch)=>{
    try{
        const res = await axios.get(RECIPES_URL);
        // console.log(res.data)
        dispatch({type: 'GET_RECIPES', payload: res.data});
    }catch(err){
        console.log(err);
    }
}
export const getRecipeDiets = () => async (dispatch) => {
	try {
		const res = await axios.get(DIETS_URL);
		dispatch({type: 'GET_RECIPE_DIETS', payload: res.data});
	} catch (err) {
		console.log(err);
		dispatch({type: 'GET_RECIPE_DIETS', payload: []});
	}
};
export const getOrder = (order) => (dispatch) => {
    dispatch({type: 'GET_ORDER', payload: order});
    console.log(order)
};
// export const filterByDiet = (payload) => {
//     console.log(payload)
//   return{
//       type: 'FILTER_BY_DIET',
//       payload
//   }
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
        console.log(id);
		dispatch({type: 'GET_RECIPE_DETAIL', payload: res.data});
		console.log('actions',res.data)
	} catch (err) {
		dispatch({type: 'GET_RECIPE_DETAIL', payload:'no entro la data' });
	}
};
export const clearDetail = () =>  {
    return {type: 'GET_RECIPE_DETAIL', payload: undefined};	
};
export const postRecipes = (payload) =>{
    return async (dispatch) => {
        const response = await axios.post(RECIPES_URL, payload);
        console.log(response)
        return response;
    }
}
// export const getByDiet = (diets) => async (dispatch) => {
//     const res = await axios.get(RECIPES_URL);
//     if (diets) {
//         Array.isArray(res.data) && (res.data = res.data.filter(c => c.diets === diets))
//     }
//     dispatch({type: 'GET_RECIPES', payload: res.data});
// }
export const dietsFilter = (array) => (dispatch) => {
	dispatch({type: 'DIETS_FILTER', payload: array});
};