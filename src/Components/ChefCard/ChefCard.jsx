import React from 'react';
import {FaHeart,FaLongArrowAltRight,FaRegBookmark} from 'react-icons/fa';

const ChefCard = ({chef}) => {
    const {name,age,id,numberOfRecipes,yearsOfExperience,description,rating,imageUrl,likes} = chef;
    return (
        <div className="card w-96 glass">
                <figure><img className='w-50' loading="lazy" src={imageUrl} alt="Man or Women pick!" /></figure>
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
                        <button className="btn btn-primary" > <span className='mr-2'>View Recipes</span> <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                    </div>
                </div>
            </div>
    );
};

export default ChefCard;