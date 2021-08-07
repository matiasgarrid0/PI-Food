import axios from 'axios';
import { RECIPES_URL, RECIPES_NAME, RECIPES_ID } from '../utils/constants';

export const getAllRecipes = () => async(dispatch)=>{
    try{
        const res = await axios.get(RECIPES_URL);
        dispatch({type: 'GET_RECIPES', payload: res.data});
    }catch(err){
        console.log(err);
    }
}
export const getOrder = (order) => (dispatch) => {
    dispatch({type: 'GET_ORDER', payload: order});
    console.log(order)
};