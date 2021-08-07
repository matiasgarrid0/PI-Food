import React from 'react';
import {Link} from 'react-router-dom';
import  './LandingPage.css';

export const LandingPage = () =>{
    return(
       <div >
            <div className="hero">
                <div className="hero_bold">
                     <h1 className="h1_hero">Food Recipes</h1>
                </div>
            </div>
            <div className="center">
                <div className="phrases">
                    <h3>Welcome to the most visited page of recipes</h3>
                    <p>Find and create your favorites recipes</p>
                </div>
                <div>
                    <Link to = '/home'>
                        <button className="btn btn-verde">Start Create</button>
                    </Link>
                </div>
            </div>
            
       </div>
    )
}
export default LandingPage;