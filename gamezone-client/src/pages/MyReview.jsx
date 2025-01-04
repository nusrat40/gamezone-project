import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyReview = () => {
  
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      // console.log(user.email);

      fetch(`https://gamezone-server.vercel.app/review?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://gamezone-server.vercel.app/review/${id}`,{
            method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {

              Swal.fire({
                title: "Deleted!",
                text: "Your Review has been deleted.",
                icon: "success",
              });
            }
            const remaining = reviews.filter(review=> review._id !== id);
            setReviews(remaining);
          
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-green-500 mb-5">
        My Reviews
      </h1>

      {reviews.length === 0 ? (
        <p className="text-center text-green-500">No reviews found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Year</th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((review, index) => (
                <tr key={review._id}>
                  <td>{index + 1}</td>
                  <td>{review.title}</td>
                  <td>{review.genre}</td>
                  <td>{review.rating}</td>
                  <td>{review.year}</td>
                  <td>
                   <Link to={`/update-review/${review._id}`}>
                   <button className="btn btn-outline btn-warning md:mr-4 mr-2">
                      Update
                    </button>
                   </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="btn btn-outline btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReview;
