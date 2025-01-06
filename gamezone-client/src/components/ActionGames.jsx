import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionGames = ({reviews}) => {

    const navigate=useNavigate();
    const actionGames = reviews.filter(review=> review.genre == 'Action');

    return (
        <div>
        <h1 className="text-3xl text-center font-bold text-green-500 mb-10">
          Explore some Action Games!
        </h1>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actionGames.map((review) => (
            <div key={review._id} className="card bg-base-100 image-full w-96 shadow-xl">
            <figure>
              <img
                src={review.photo}
                alt="" />
            </figure>
            <div className="card-body justify-center items-center top-20">
              <h2 className="card-title text-3xl font-bold">{review.title}</h2>
              <button onClick={()=> navigate(`/review-details/${review._id}`)} className="btn ">See More</button>
              
            </div>
          </div>
            
          ))}
        </div>
      </div>
    );
};

export default ActionGames;