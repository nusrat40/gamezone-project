import React from 'react';
import ReviewCard from './ReviewCard';

const RecentlyAdded = ({reviews}) => {

    const recentlyAdded = reviews.filter(review=> review.year >= 2023)

    return (
        <div>
      <h1 className="text-3xl text-center font-bold text-green-500 mb-10">
        Recently Added Games
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentlyAdded.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
    );
};

export default RecentlyAdded;