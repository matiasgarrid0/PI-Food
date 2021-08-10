import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getRecipesDetail } from '../actions';
import { useSelector } from 'react-redux';

export const CardDetail = ({match}) => {
    const recipeDetail = useSelector(state => state.detail);
    const{title, id, image, diets, spoonacularScore, healthScore} = recipeDetail;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecipesDetail(match.params.id));
      }, [])

    return (
        <div>
            <div>
                <h1>Detail</h1>
                <Link className="" to="/home">
                <button  className="btn btn-verde" type="button">
                 Back Home
                </button>
                </Link>
            </div>
            <div>
                <div>
                <h2> <span className="spanClear">Recipe: </span >{title}</h2>
                <div> <img src= {image} style={{width: 150, height: 150}} alt="food"/> </div>
                <h2> <span className="spanClear">Diets: </span >{diets}</h2>
                {/* <h2> <span className="spanClear">Types: </span >{types}</h2> */}
                <h2> <span className="spanClear">Spoonacular Score: </span >{spoonacularScore}</h2>
                <h2> <span className="spanClear">Health Score: </span >{healthScore}</h2>

                </div>
            </div>
        </div>
    )  
}

export default CardDetail;