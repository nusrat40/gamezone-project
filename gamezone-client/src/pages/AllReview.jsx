import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";


const AllReview = () => {

    const reviews = useLoaderData();

    const [sortReviews, setSortReviews] = useState(reviews);
    const [selectGenre, setSelectGenre] =useState('');

    const handleSort = (criteria) => {
        const sorted = [...reviews].sort((a, b) => {

            const valueA = criteria === "rating" || criteria === "year" ? parseInt(a[criteria], 10) : a[criteria];
            const valueB = criteria === "rating" || criteria === "year" ? parseInt(b[criteria], 10) : b[criteria];
            return valueA > valueB ? 1 : -1; 
        }
    );
        setSortReviews(sorted);
      };

      const handleFilter = genre =>{
        setSelectGenre(genre);
        if(genre === '')
        {
            setSortReviews(reviews);
        }
        else{
            const filteredReviews = reviews.filter(review=> review.genre === genre);
            setSortReviews(filteredReviews);
        }
      };


    return (
        <div>
      
        <h1 className='text-3xl text-center font-bold text-green-500 mb-5'>All Reviews</h1>

        <div className="flex justify-center items-center gap-4 px-4 ">

            {/* sorting */}
        <div className="flex justify-center ">
        <details className="dropdown ">
          <summary className="btn bg-green-400 w-full">Sort By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow z-20">
            <li>
              <button className="hover:bg-green-400" onClick={() => handleSort("rating")}>Rating</button>
            </li>
            <li>
              <button className="hover:bg-green-400" onClick={() => handleSort("year")}>Year</button>
            </li>
          </ul>
        </details>
      </div>


       {/* filter by genre */}
       <div className="flex justify-center">
        <details className="dropdown">
          <summary className="btn bg-green-400 w-full">Filter By Genre</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow z-30">
            <li>
              <button className="hover:bg-green-400" onClick={() => handleFilter('')}>All Genres</button>
            </li>
            <li>
              <button className="hover:bg-green-400" onClick={() => handleFilter('RPG')}>RPG</button>
            </li>
            <li>
              <button className="hover:bg-green-400" onClick={() => handleFilter('Adventure')}>Adventure</button>
            </li>
            <li>
              <button className="hover:bg-green-400" onClick={() => handleFilter('Action')}>Action</button>
            </li>
            
          </ul>
        </details>
      </div>

        </div>

        

     




        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
          {
            sortReviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
          }
        </div>
        </div>
  
    );
};

export default AllReview;