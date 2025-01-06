import React from "react";
import ReviewCard from "./ReviewCard";

const HighestRated = ({ reviews }) => {

    const highestRated = [...reviews].sort((a,b)=> b.rating - a.rating);


  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-green-500 mb-10">
        Highest Rated Games
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {highestRated.slice(0,6).map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
