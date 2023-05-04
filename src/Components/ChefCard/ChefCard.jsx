import React, { useState } from 'react';
import { FaHeart, FaLongArrowAltRight, FaRegBookmark } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const [loader,setloader] = useState(true);
    const { name, age, id, numberOfRecipes, yearsOfExperience, description, rating, imageUrl, likes } = chef;
    
    return (
        <div className="card w-96 glass">
            <figure><LazyLoadImage
                // delayTime={300}
                src={imageUrl} /></figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold'>With {yearsOfExperience} Years Experiance</p>
                </div>
                <div>
                    <p>Number Of Recipes {numberOfRecipes}</p>
                </div>

                <div className="card-actions">
                    <p className='my-auto font-semibold'>Likes: {likes} </p>
                    <p className='font-semibold my-auto'>Rating: {rating}</p>
                    <Link to={`/recipe/${id}`}><button className="btn btn-primary" > <span className='mr-2'> <Link to={`/recipe/${id}`}>View Recipes</Link> </span> <FaLongArrowAltRight></FaLongArrowAltRight> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;