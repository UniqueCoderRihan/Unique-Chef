import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://e0.pxfuel.com/wallpapers/52/830/desktop-wallpaper-food-background-food-food-recipes-food-menu-greek-food.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-pink-300">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
                        <p className="mb-5">We Know You Need to know About Best Chef Information. We Provide Updated List About Chef</p>
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;