import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipesDetails = () => {
    const recipe = useLoaderData();
    return (
        <div>
            <h1>This is Rechipis Details</h1>
        </div>
    );
};

export default RecipesDetails;