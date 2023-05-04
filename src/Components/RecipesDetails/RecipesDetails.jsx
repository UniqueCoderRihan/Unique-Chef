import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipesDetails = () => {
    const {id} = useParams()
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/recipe/${id}`)
        .then(res=> res.json())
        .then(data=>setData(data))
        
    },[])
    return (
        <div>
            <h1>This is Recipe Details Page</h1>
        </div>
    );
};

export default RecipesDetails;