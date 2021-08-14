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
          <div className="center"> 
                <div className="gridDetail center">
                {recipeDetail && recipeDetail.length ?    
                    <div>
                        <div className="cardDetail">
                            <h2 className="nameDetail">{recipeDetail[0].title}</h2>
                            <div> <img src= {recipeDetail[0].image} style={{width: 250, height: 210}} alt="food"/> </div>
                        </div>
                        <div>
                            <h2><span className="spanClear fontSize">Summary: </span ></h2>
                            <div className="center">
                                {recipeDetail[0].summary.replace(/<[^>]*>?/g, '')}
                            </div>
                        </div>
                        <ul className="order center">
                            <h2 className="center">Diets:</h2>
                            {recipeDetail[0].diets? <div >
                                {recipeDetail[0].diets &&recipeDetail[0].diets.map((e,i) =>(<li className = "dietsDetail" key={i}>{e}</li>))}
                                </div>:null}
                                {recipeDetail[0].types? <div>
                                {recipeDetail[0].types &&recipeDetail[0].types.map((e,i) =>(<li className = "dietsDetail" key={i}>{e.name}</li>))}
                                </div>:null}
                        </ul>
                        
                        <h2> <span className="spanClear fontSize">Spoonacular Score: </span >{recipeDetail[0].spoonacularScore}</h2>
                        <h2> <span className="spanClear fontSize">Health Score: </span >{recipeDetail[0].healthScore}</h2>
                        <div className="">
                        {recipeDetail[0].analyzedInstructions?.length > 0 ? (
                            <div>   
                        { recipeDetail[0].analyzedInstructions[0].steps.map((e)=>(
                            <p key = {e.number}> <span className="bold">Step-{e.number}:</span>{e.step}</p>
                        ))}
                            </div>
                        ): null}
                        {recipeDetail[0].steps ? <div>{recipeDetail[0].steps} </div>:null}
                        </div>
                        <div></div>
                        </div>
                        :<p className="center">Loading Information...</p>
                }
                </div>
                <Link className="center" to="/home">
                    <button  className="btn btn-verde" type="button">
                    Back Home
                    </button>
                </Link>
          </div> 
        </div>
    )  
}

export default CardDetail;