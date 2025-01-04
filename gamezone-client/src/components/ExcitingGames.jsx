import React from 'react';

const ExcitingGames = ({reviews}) => {

    const excitingGames = reviews.filter(review=> review.rating >= 7)


    return (
        <div>
      <h1 className="text-3xl text-center font-bold text-green-500 mb-10">
        Most Exciting Games!
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {excitingGames.map((review) => (
          <div key={review._id} className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src={review.photo}
              alt="" />
          </figure>
          <div className="card-body justify-center items-center top-28">
            <h2 className="card-title text-3xl font-bold">{review.title}</h2>
            <p>Genre: {review.genre}</p>
            
          </div>
        </div>
          
        ))}
      </div>
    </div>
    );
};

export default ExcitingGames;