import axios from 'axios';
import { RECIPES_URL, RECIPE_NAME, RECIPES_ID, DIETS_URL } from '../utils/constants';

export const getAllRecipes = () => async(dispatch)=>{
    try{
        const res = await axios.get(RECIPES_URL);
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
    
};

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

	} catch (err) {
		dispatch({type: 'GET_RECIPE_DETAIL', payload:'no data' });
	}
};
export const clearDetail = () =>  {
    return {type: 'GET_RECIPE_DETAIL', payload: undefined};	
};
export const postRecipes = (payload) =>{
    return async (dispatch) => {
        const response = await axios.post(RECIPES_URL, payload);
       
        return response;
    }
}

export const dietsFilter = (array) => (dispatch) => {
	dispatch({type: 'DIETS_FILTER', payload: array});
};