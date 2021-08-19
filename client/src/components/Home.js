import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import { getAllRecipes, dietsFilter, getRecipeName } from '../actions';
import { Card } from './Card';
import Order from './Order';
import Filter from './Filter';
import SearchBar from './SeacrchBar';
import Paginate from './Paginate';
import './Home.css'

export const Home = () => {

    const dispatch = useDispatch();
    const Recipes = useSelector(state => state.recipes);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = Recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    const [title, setName] = useState("")

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
  
    useEffect(()=>{
        dispatch(getAllRecipes());
    }, [dispatch,Recipes]);

    const handleFilter =(e) => {
        dispatch(dietsFilter(e.target.value))
    }

    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(getAllRecipes());
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
       e.preventDefault();
       if (title.length) {
           dispatch(getRecipeName(title));
       }
   };
   
  
    return (
        <div>
            <div className="heroHome">
                <div className="">
                    <h1 className="h1_hero hero_bold">Food-Recipes</h1>
                </div>
                    <Link className="" to="/recipes">
                        <button  className="btn btn-verde" type="button">
                        Create Recipe
                        </button>
                    </Link>
            </div>
            <div>
                <SearchBar
                      title = {title}
                      handleChange = {handleChange}
                      handleSubmit = {handleSubmit}                
                />  
            </div>
            <div className="center">
                <button className="center btn btn-verde" onClick={e=> handleClick(e)}>Recharge Recipes</button> 
            </div>
            <div>
                <Filter
                />
            </div>
         <div className="center">
             <p>Filer by Diets-Types</p>

            <select className="select"  onChange={(e) => handleFilter(e)}>
                <option value="vegan">Vegan</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
                <option value="gluten free">Gluten Free</option>
                <option value="dairy free">Dairy Free</option>
                <option value="primal">Primal</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="fodmap friendly">Fodmap Friendly</option>
                <option value="whole 30">Whole 30</option>
            </select>
        </div>
            <div className="center">
                <p>Order</p>
                <Order
                 
                />
            </div>
            <div>
                <div className="disposition">
                    {currentRecipes?.map(recipe => {
                        return (
                            <Card
                            key={recipe.id}
                            recipe = {recipe}
                            />
                        )                                                           
                    })}
                </div>
            </div>
            <div>
                <Paginate
                   recipesPerPage={recipesPerPage}
                   Recipes={Recipes.length}
                   paginate={paginate}  

                />
            </div>
        </div>
    )
}
export default Home;