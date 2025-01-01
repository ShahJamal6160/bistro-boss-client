import React from 'react';

const FoodCard = ({ item }) => {
    const {image, price, name, recipe} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 m-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;