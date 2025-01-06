import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const {_id, photo, title, des, rating, year, genre, email, name } = review;

  const navigate=useNavigate();

  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full flex flex-col justify-between">
        <figure className=" py-2">
          <img src={photo} alt={title} className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title font-bold">{title}</h2>
          <p>{des}</p>
          <div className="space-y-2 gap-8 text-gray-600">

            {/* rating */}
            <div className="flex gap-2">
              <p>Rating: {rating}</p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
            </div>

            <p>Publishing Year: {year}</p>
            
          </div>

          <div className="card-actions">
            <button onClick={()=> navigate(`/review-details/${_id}`)} className="btn bg-green-400">Explore Details</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
