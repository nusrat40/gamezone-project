import React, { useEffect, useState } from 'react';

  

const Testimonials = () => {

    const[testimonials,setTestimonial]=useState([]);

    useEffect(()=>{
        fetch('testimonial.json')
        .then(res=>res.json())
        .then(data=>setTestimonial(data))
    },[])


    return (
        <div>
        <h1 className="text-3xl text-center font-bold text-green-500 mb-10">
          What Gamers are saying
        </h1>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial,index) => (
           <div key={index} className="p-6 rounded-lg shadow-lg text-center max-w-sm space-y-2">
           <img
             src={testimonial.image}
             alt={testimonial.name}
             className="w-20 h-20 mx-auto rounded-full border-4 border-red-500 mb-4"
           />
           <h3 className="text-xl font-semibold">{testimonial.name}</h3>
           <p className="text-sm mt-2">{testimonial.feedback}</p>
           
           {/* rating */}
           <div className="flex gap-2 justify-center">
              <p>Rating: {testimonial.rating}</p>
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
         </div>
            
          ))}
        </div>
      </div>
    );
};

export default Testimonials;