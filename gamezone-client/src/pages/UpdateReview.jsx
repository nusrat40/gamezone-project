import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateReview = () => {

    const review =useLoaderData();
    

    const {_id, photo, title, des, rating, year, genre, email, name } = review;

    const {user} =useContext(AuthContext);

    const navigate = useNavigate();


    const [selectedGenre, setSelectedGenre] = useState(genre);
    const [updateRating, setUpdateRating] = useState(rating);

    const handleGenreChange = (e) => {
      setSelectedGenre(e.target.value);
      
    };

    const handleUpdateRating = e =>{
      setUpdateRating(e.target.value);
    }


    const handleUpdateReview=e=>{

        e.preventDefault();
    
        const photo =e.target.photo.value;
        const title =e.target.title.value;
        const des = e.target.description.value;
        const rating =e.target.rating.value;
        const year = e.target.year.value;
        const genre =e.target.genre.value;
        const email =user?.email;
        const name=user?.displayName;
    
        const updatedReview={photo,title,des,rating,year,genre,email,name};
    
    
        //send data to the server
        fetch(`https://gamezone-server.vercel.app/review/${_id}`,{
            method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(updatedReview)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Review updated added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            navigate('/');
        })
    
      }
    



    return (
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Review</h2>
      <form onSubmit={handleUpdateReview}>
        {/* form row */}
        <div className="md:flex mb-6 ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Game Thumbnail</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="cover image"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Game Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="title"
                placeholder="game title"
                defaultValue={title}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Review Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="description"
                defaultValue={des}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="rating"
                value={updateRating}
                onChange={handleUpdateRating}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Publishing Year</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="year"
                placeholder="publishing year"
                defaultValue={year}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <label className="input-group">
              <select className="w-full h-[45px] rounded-lg" name="genre" value={selectedGenre} onChange={handleGenreChange}>
                <option value="" disabled>
                  Select Genre
                </option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Adventure">Adventure</option>
              </select>
            </label>
          </div>
        </div>

        {/* form row */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                value={user?.email} readOnly
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
                value={user?.displayName}
                readOnly
              />
            </label>
          </div>
        </div>


        <input type="submit" value="Update Review" className="btn btn-block bg-green-400" />
      </form>
    </div>
    );
};

export default UpdateReview;