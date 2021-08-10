import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export const Card = ({recipe}) => {
    const {title, id, image, diets,types} = recipe;

    return(
        <div className="card">
            <Link className="noDecoration" to={`/recipes/${id}`}>
             <p className="name">{title}</p>
            </Link>
            <img src={image} style = {{width: 150, height: 150}} alt="food"/>
            <ul className="order">
                {diets? <div className="grid">
                    {diets &&diets.map((e,i) =>(<li className = "diets" key={i}>{e}</li>))}
                </div>:null}
                {types? <div>
                    {types &&types.map((e,i) =>(<li className = "diets" key={i}>{e.name}</li>))}
                </div>:null}
            </ul>
        </div>
    )
}