import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
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
        console.log(input)
    } 

    const handleSelect = (e) =>{
        setInput({
            ...input,
            type: [...input.type , e.target.value],
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input)
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
    }

    useEffect(() => {
       dispatch(getRecipeDiets()) 
    }, [])

    function validater(value, type) {
        switch (type) {
            case "title":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el Nombre tiene que ser un texto');
                } else {
                    setError('Es necesario un resumen');
                }
                setInput({ ...input, title: value });
                break;
            case "summary":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el valor tiene que ser un texto');
                } else {
                    setError(-1);
                }
                setInput({ ...input, summary: value});
                break;
            case "healthScore":
                if (100 > parseInt(value) > 0 || value === '-') {
                    setError(-1);
                } else {
                    setError('el valor tiene que ser entre 0 y 100');
                }
                setInput({ ...input, healthScore: value });
                break;
            case "spoonacularScore":
                if (100 > parseInt(value) > 0 || value === '-') {
                    setError(-1);
                } else {
                    setError('el valor tiene que ser entre 0 y 100');
                }
                setInput({ ...input, spoonacularScore: value });
                break;
            case "analyzedInstructions":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el valor tiene que ser un texto');
                } else {
                    setError(-1);
                }
                setInput({ ...input, analyzedInstructions: [value] });
                break;
            case "steps":
                if (!/^([a-zA-Z]+( [a-zA-Z]+)+)$/.test(value)) {
                    setError('el valor tiene que ser un texto');
                } else {
                 setError(-1);
                }
                setInput({ ...input, steps: [value] });
                break;    
            default:
                break;
        }

    }

  return(
      <div>
             <div className="hero">
              <div className="hero_bold">
                  <h1 className="h1_hero">Create Recipe</h1>
              </div>
          </div>
          <div className="paddingForm">
              <form onSubmit={(e)=>handleSubmit(e)} className="formulario">
                  <label>Title</label>
                  <input className="searchBar" type="text" value={input.title} name="title" placeholder="Title" onChange = {(e)=>handleChange(e)}></input>
                  <label>Summary</label>
                  <textarea className="searchBar" type="text" value={input.summary} name="summary" placeholder="" onChange = {(e)=>handleChange(e)}></textarea>
                  <label>Spoonacular Score</label>
                  <input className="searchBar" type="number" name="spoonacularScore" value={input.spoonacularScore} placeholder="" onChange = {(e)=>handleChange(e)}></input>
                  <label>Health Score</label>
                  <input className="searchBar" type="number" name="healthScore" value = {input.healthScore} placeholder="" onChange = {(e)=>handleChange(e)}></input>
                  <label>Image</label>
                  <input className="searchBar" type="text" name="image" value = {input.image} placeholder="Paste URL image" onChange = {(e)=>handleChange(e)}></input>
                  <label>Diets</label>
                  
                      <select onChange = {(e)=>handleSelect(e)} className="searchBar">
                          {type.map((type) =>(
                             <option name="type" value={type.name}>{type.name}</option>       
                          ))}
                      </select>
                      {/* <ul><li className="list">{input.type.map(e => e + ", ")}</li></ul> */}
                  
                  <label>Step by step</label>
                  <textarea className="searchBar" name="steps" value = {input.steps} onChange = {(e)=>handleChange(e)} ></textarea>
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