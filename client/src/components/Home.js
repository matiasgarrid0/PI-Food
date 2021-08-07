import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllRecipes } from '../actions';
import { Card } from './Card';
import Order from './Order';

import ReactPaginate from "react-paginate";
import './Home.css'

export const Home = () => {

    const dispatch = useDispatch();
    const Recipes = useSelector(state => state.recipes);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [recipesPerPage, setRecipesPerPage] = useState(9)
    // const indexOfLastRecipe = currentPage * recipesPerPage;
    // const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    // const currentRecipes = Recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
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

    useEffect(()=>{
        dispatch(getAllRecipes());
    }, []);

    const handleClick = (e) =>{
        e.preventDefault();
        dispatch(getAllRecipes());
    }
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
            <div>
                <button onClick={e=> handleClick(e)}>Recharge Recipes</button> 
            </div>
            <div className="center">
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