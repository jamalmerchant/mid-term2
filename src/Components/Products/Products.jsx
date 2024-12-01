import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';



const Products = () => {

  
  const [Products , setProducts] = useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setProducts(data))
    
    
  },[])
  return (
    
    <div className="pt-24 px-20 grid grid-cols-3 gap-5 ">
    
      {
        Products.map(product => <Product></Product> )
      }
      
      
    </div>
   
  );
};

export default Products;