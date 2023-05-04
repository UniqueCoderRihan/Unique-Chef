import React, { useEffect } from 'react';

const RecipesDetails = ({ recipe }) => {
    console.log(recipe);
    const { name, description, ingredients, image } = recipe;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Description: {description}</p>
                    <p>Ingrediant: {ingredients}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;