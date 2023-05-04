import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipeLayout = () => {
    const {id} = useParams()
    const data = useLoaderData()
    console.log(data)
    const {name,description,ingredients,image} = data;
    return (
        <div>
            <h2>This is Layout Of  {name}</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default RecipeLayout;