import React from 'react';
import { Link } from "react-router-dom";


const Product = ({ product }) => {

  // console.log()


  return (
    <Link>
      <div>
        {/* Images  */}
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          <img
            className='w-[160px] h-[160px] group-hover:scale-90'
            src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Product;
