import React from 'react';
import './Paginate.css'
const Paginate = ({recipesPerPage, Recipes, paginate}) => {
    const pageNumbers = [];
    for(let i = 0; i <= Math.ceil(Recipes/recipesPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="list">
                {pageNumbers &&
                    pageNumbers.map(number =>(
                        <li className="list" key= {number}>
                            <a className="paginationBttns" onClick={() =>paginate(number)}>{number}</a>
                        </li>
                    ))                
                }
            </ul>
        </nav>
    )
}
export default Paginate;