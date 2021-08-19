import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { postRecipes, getRecipeDiets } from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import './CreateRecipe.css'
const CreateRecipe = () =>{
    const dispatch = useDispatch()
    const type = useSelector(state => state.recipeDiets)
    const [error, setError] = useState('')
    const [input, setInput] = useState({
        title: '',
        summary: '',
        spoonacularScore: '',
        healthScore: '',
        type:[],
        image: '',
        steps: '',
    })
    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value 
        })
        setError(validate({
            ...input,
            [e.target.name] : e.target.value 
        }))
    } 
    const handleSelect = (e) =>{
        setInput({
            ...input,
            type: [...input.type , e.target.value],
        })
    }
    const handleSubmit = (e) =>{
      if(input.title && input.summary && input.healthScore && input.spoonacularScore && input.spoonacularScore > 0 && input.type.length > 0 ){
        e.preventDefault();
        dispatch(postRecipes(input));
        alert('Recipe created successfully');
        setInput({
            title: '',
            summary: '',
            spoonacularScore: '',
            healthScore: '',
            type: '',
            image: '',
            steps: '',
        })
      } else {
          alert('Tile, Summary, health Score, Spoonacular Score and Diets are required')
      }
    }
    useEffect(() => {
       dispatch(getRecipeDiets()) 
    }, [])

 const validate = (input) => {
     let error = {}
     input.title ? error.title = '' : error.title = 'obligatory field'
     !input.summary ? error.summary = 'obligatory field' : error.summary = ''
     input.spoonacularScore > 0 ?  error.spoonacularScore = '' : error.spoonacularScore = 'numbers greater than 0'
     input.healthScore > 0 ? error.healthScore = '' : error.healthScore = 'numbers greater than 0'
    
     return error;
 }

  return(
      <div>
             <div className="hero">
              <div className="hero_bold">
                  <h1 className="h1_hero">Create Recipe</h1>
              </div>
          </div>
          <div className="paddingForm spooncular">
              <form onSubmit={(e)=>handleSubmit(e)} className="formulario">
                  <label>Title</label>
                  <input className="searchBar" type="text" id= "title"  value={input.title} name="title" placeholder="Title" onChange = {(e)=>handleChange(e)} require ></input>
                  {error.title && <p className="error">{error.title}</p>}
                  <label>Spoonacular Score</label>
                  <input className="searchBar" type="number" id= "spoonacularScore" name="spoonacularScore" value={input.spoonacularScore} placeholder="" onChange = {(e)=>handleChange(e)} ></input>
                  {error.spoonacularScore && <p className="error">{error.spoonacularScore}</p>}
                  <label>Health Score</label>
                  <input className="searchBar" type="number" id= "healthScore" name="healthScore" value = {input.healthScore} placeholder="" onChange = {(e)=>handleChange(e)} ></input>
                  {error.healthScore && <p className="error">{error.healthScore}</p>}
                  <label>Image</label>
                  <input className="searchBar" type="text" id= "image" name="image" value = {input.image} placeholder="Paste URL image" onChange = {(e)=>handleChange(e)}  ></input>
                  <label>Diets</label>
                  <div>
                      <select onChange = {(e)=>handleSelect(e)} className="searchBar">
                          {type.map((type) =>(
                             <option name="type" id = "type" value={type.name}>{type.name}</option>       
                          ))}
                      </select>
                    
                      {/* <ul><li className="list">{input.type.map(e => e + ", ")}</li></ul> */}
                   </div>
                      <label>Summary</label>
                  <textarea className="searchBar" cols="30" rows="3" type="text" id= "summary" value={input.summary} name="summary" placeholder="" onChange = {(e)=>handleChange(e)} ></textarea>
                  {error.summary && <p className="error">{error.summary}</p>}
                  <label>Step by step</label>
                  <textarea className="searchBar" cols="30" rows="5" name="steps" id= "steps" value = {input.steps} onChange = {(e)=>handleChange(e)} ></textarea>
                  {error.steps && <p className="error">{error.steps}</p>}
                  <button className="btn btn-verde" type="submit" name="">Create Recipe</button>
              </form>
          </div>
          <Link className="center" to="/home">
                <button   className="btn btn-verde" type="button">
                    Back Home
                </button>
          </Link>
      </div>
  )
}


export default CreateRecipe;