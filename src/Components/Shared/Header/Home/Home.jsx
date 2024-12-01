import React, { useState } from 'react';
import img from "../../../../public/chocolate.avif"
const Home = () => {



    


    return (
        <div className="py-10">


        


         <h3 className="text-blue-800 text-center text-2xl py-3">THIS IS OUR LETEST PRODUCT</h3>
          {/* banner  section */}

        <div className="card bg-base-100 w-96 shadow-xl justify-center">
        <figure>
          <img
            src={img}
            alt="chocolate"/>
         </figure>
        <div className="card-body">
          <h2 className="card-title">cadbury!</h2>
          <p>have a break have a chocolate!</p>
          <div className="card-actions justify-end">
            <button   className="btn btn-primary">Buy Now</button>
            <button>
            <div className="rating">
           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input
          type="radio"
           name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked />
         <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
           </div>
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};


 

export default Home;