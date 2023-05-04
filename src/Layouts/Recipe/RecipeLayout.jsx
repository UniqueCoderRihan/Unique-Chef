import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Nabvar from '../../Components/Nabvar/Nabvar';
import { FaBookmark, FaGratipay } from 'react-icons/fa';
import RecipesDetails from '../../Components/RecipesDetails/RecipesDetails';

const RecipeLayout = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(data)
    const { chef, recipe } = data;
    const { name, age, numberOfRecipes, yearsOfExperience, description, rating, imageUrl, likes } = chef;
    return (
        <div>
            <Nabvar></Nabvar>
            <div>
                <div className="card w-full bg-base-100 shadow-xl border-rounded my-2 align-center">
                    <img className='w-96 rounded-lg' src={imageUrl} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}

                        </h2>
                        <p>{description}</p>
                        <p className='text-warning'>Number Of Recipeis: {numberOfRecipes}</p>
                        <p className='text-warning'>Years Of Experiance: {yearsOfExperience}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"> <FaGratipay></FaGratipay> {likes}</div>
                            <div className="badge badge-outline"> <FaBookmark></FaBookmark> </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3'>
                    {
                        recipe.map(r => <RecipesDetails recipe={r}></RecipesDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RecipeLayout;