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
                    <button className="btnSearchBar btn-verde-search"type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                        </button>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;