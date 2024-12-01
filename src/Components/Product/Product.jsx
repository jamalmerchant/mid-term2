import React from 'react';
import img from "../../public/cudbury.jpeg"
const Product = () => {
    return (
       
         <div className=" bg-lime-300  shadow-xl py-6 mt-0  rounded-md">
  <figure>
    <img className=" w-[260px] h-[270px]"
    src={img}
      alt="cadbury" />
  </figure>
  <div className="card-body text-black">
    <h2 className="card-title">Dairy Milk!</h2>
    <p>have a break have a chocolate?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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
    
    );
};

export default Product;