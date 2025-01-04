import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const review = useLoaderData();

  const { user } = useContext(AuthContext);

  const { _id, photo, title, des, rating, year, genre, email, name } = review;

  const handleAddToWatchList = () => {
    if (!user) {
      toast.error("You must be logged in to add this to your watchlist");
      return;
    }

    const watchListData = {
      userEmail: user.email,
      userName: user.displayName,
      id: _id,
      title,
      photo,
      des,
      genre,
      rating,
      year,
    };

    fetch("https://gamezone-server.vercel.app/watchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchListData),
    })
      .then((res) =>
        res.json().then((data) => ({
          status: res.status,
          data,
        }))
      )
      .then(({ status, data }) => {
        if (status === 400) {
          // Handle duplicate entry
          toast.error(
            data.message || "This review is already in your WatchList."
          );
        } else if (data.insertedId) {
        
          Swal.fire({
            title: "Success!",
            text: "Review added successfully to WatchList",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
      
        toast.error(error.message);
        console.error(error);
      });


  };


  
  return (
    <div className="bg-base-100   shadow-xl mt-10">
      <div className="p-8 rounded-lg flex flex-col md:flex-row gap-8">
        <div className="space-y-2">
          <img className="rounded-xl " src={photo} alt="" />
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">Genre: {genre}</p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">{des}</p>

          {/* rating */}
          <div className="flex gap-2">
            <p className="text-gray-600">Rating: {rating}</p>
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

          <p className="text-gray-600">Publishing Year: {year}</p>
          <h2 className="text-xl font-semibold">Reviewer's name: {name}</h2>
          <h2 className="font-semibold">Email: {email}</h2>
          <button onClick={handleAddToWatchList} className="btn bg-green-400">
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
