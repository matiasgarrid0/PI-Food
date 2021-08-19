import React, {Fragment} from 'react';
import './Paginate.css'
const Paginate = ({recipesPerPage, Recipes, paginate}) => {
    
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(Recipes/recipesPerPage); i++){
        pageNumber.push(i)
    }
    return(
        <Fragment >
            <div className= "align">
                {pageNumber &&
                    pageNumber.map(number =>(
                                         
                            <button key={number} className="BUTTON_PAG" onClick={() =>paginate(number)}>{number}</button>    
                    ))                
                }  
            </div>      
        </Fragment>
    )
}
export default Paginate;