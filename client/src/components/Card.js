import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export const Card = ({recipe}) => {
    const {title, id, image, diets,types} = recipe;

    return(
            <Link className="noDecoration" to={`/recipes/${id}`}>
        <div className="card">
             <p className="name">{title}</p>
            
            <img src={image} style = {{width: 150, height: 150}} alt="food"/>
            <div>
            <ul className="order">
                {diets? <div className="grid">
                    {diets &&diets.map((e,i) =>(<li className = "diets" key={i}>{e}</li>))}
                </div>:null}
                {types? <div className="grid">
                    {types &&types.map((e,i) =>(<li className = "diets" key={i}>{e.name}</li>))}
                </div>:null}
            </ul>
            </div>
        </div>
        </Link>
    )
}