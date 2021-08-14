import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getRecipesDetail, clearDetail } from '../actions';
import { useSelector } from 'react-redux';
import './CardDetail.css'

export const CardDetail = ({match}) => {
    const recipeDetail = useSelector(state => state.detail);
   
    console.log(recipeDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecipesDetail(match.params.id));
        return () => dispatch(clearDetail());
      }, [match.params.id,dispatch])

    return (
        <div className="">
            <div className="hero">
                <div className="hero_bold">
                    <h1 className="h1_hero">Detail</h1>
                </div>    
            </div>
            <div className="cardDetail">
             {recipeDetail && recipeDetail.length ? 
                    
                <div>
                    <h2 className="nameDetail">{recipeDetail[0].title}</h2>
                    <div> <img src= {recipeDetail[0].image} style={{width: 150, height: 150}} alt="food"/> </div>
                    {/* <h2><span className="spanClear">Summary: </span >{recipeDetail[0].summary}</h2> */}
                    <ul className="order">
                        {recipeDetail[0].diets? <div className="gridDetail">
                            {recipeDetail[0].diets &&recipeDetail[0].diets.map((e,i) =>(<li className = "dietsDetail" key={i}>{e}</li>))}
                            </div>:null}
                            {recipeDetail[0].types? <div>
                            {recipeDetail[0].types &&recipeDetail[0].types.map((e,i) =>(<li className = "dietsDetail" key={i}>{e.name}</li>))}
                             </div>:null}
                    </ul>
                    
                    <h2> <span className="spanClear">Spoonacular Score: </span >{recipeDetail[0].spoonacularScore}</h2>
                    <h2> <span className="spanClear">Health Score: </span >{recipeDetail[0].healthScore}</h2>
                    <div>
                    {recipeDetail[0].steps ? <div>{recipeDetail[0].steps} </div>:null}
                    {recipeDetail[0].analyzedInstructions.length > 0 ? (
                        <div>   
                       { recipeDetail[0].analyzedInstructions[0].steps.map((e,i)=>(
                        <p key = {i}> number:{e.number} - step:{e.step}</p>
                       ))}
                        </div>
                    ): null}
                    
                    </div>
                    <div></div>
                    </div>
                    :<p>Loading Information...</p>
             }
            </div>
            <Link className="center" to="/home">
                <button  className="btn btn-verde" type="button">
                 Back Home
                </button>
            </Link>
        </div>
    )  
}

export default CardDetail;