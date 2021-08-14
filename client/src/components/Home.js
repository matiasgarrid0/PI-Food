import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import { getAllRecipes, dietsFilter, getRecipeName } from '../actions';
import { Card } from './Card';
import Order from './Order';
import Filter from './Filter';
import SearchBar from './SeacrchBar';
import ReactPaginate from "react-paginate";

import './Home.css'

export const Home = () => {

    const dispatch = useDispatch();
    const Recipes = useSelector(state => state.recipes);
    const filteredRecipes = useSelector(state => state.filteredRecipes) 
    const state = useSelector(state => state)
    // const [currentPage, setCurrentPage] = useState(1);
    // const [recipesPerPage, setRecipesPerPage] = useState(9)
    // const indexOfLastRecipe = currentPage * recipesPerPage;
    // const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    // const currentRecipes = Recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    // const [filtro, setFiltro] = useState({
    //     diets:'', 
    // });
    const [resultado, setResultado] = useState(state.filteredRecipes)
    const [title, setName] = useState("")
    const [pageNumber, setPageNumber] = useState(0);
    const recipesPerPage = 9;
    const pagesVisited = pageNumber * recipesPerPage;
    const pageCount = Math.ceil(Recipes.length / recipesPerPage);
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    // const paginate = (pageNumber) =>{
    //     setCurrentPage(pageNumber)
    // }
    // useEffect(() => {
    //     dispatch( getByDiet(filtro.diets))
    // }, [dispatch, filtro]);
    // useEffect(() => {
    //     setResultado(state.filteredRecipes)
    // },[state.filteredRecipes])

    useEffect(()=>{
        dispatch(getAllRecipes());
    }, []);
    function handleFilter(e) {
        dispatch(dietsFilter(e.target.value))
    }

    // const handleFilterStatus = (e) => {
    //     dispatch(getByDiet(e.target.value));
    // }

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
           console.log(title)
       }
   };
    const displayRecipes = Recipes
    .slice(pagesVisited, pagesVisited + recipesPerPage)
    .map(recipe => {
           return (
               <Card
               key={recipe.id}
               recipe = {recipe}
               />
           )                                                           
    })

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
                <option value="All">All</option>
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
                <Order/>
            </div>
            <div>
            <div className="disposition">
                {displayRecipes} 
             </div>
                <div >
                    <div className="paginateBar">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Home;