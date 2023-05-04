import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipesDetails = () => {
    const recipe = useLoaderData();
    console.log(recipe);
    return (
        <div>
            <h1>This is Recipe Details Page</h1>
        </div>
    );
};

export default RecipesDetails;