import React from 'react';
import './SearchBar.css'
export const SearchBar = ({handleChange, handleSubmit, title}) => {
    return (
        <div className="center envolveSearchBar">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h2>Search Recipes</h2>
                </div>
                <div className="bar">
                    <input className="searchBar" 
                    type="text" 
                    placeholder="Search Recipes..."
                    id = "name" 
                    coutoComplete = "off" 
                    value = {title} 
                    onChange={(e) => handleChange(e)}
                    />
                    <button className="btnSearchBar btn-verde-search" type="submit">
                       search
                    </button>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;