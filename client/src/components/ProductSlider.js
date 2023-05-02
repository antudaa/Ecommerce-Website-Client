import React from 'react';
// Importing React Swiper Component 
import { Swiper, SwiperSlide } from "swiper/react";
// Importing Swiper Styles 
import "swiper/css";
import "swiper/css/pagination";
// Importing Required Modules 
import { Pagination, Navigation } from "swiper";
import Product from "../components/Product";


const ProductSlider = ({ data }) => {

  return (
    <Swiper>
      <>
        {
          data?.map((product) => {
            return <SwiperSlide
              key={product.id}
            >
              <Product
                product={product}
              />
            </SwiperSlide>
          })
        }
      </>
    </Swiper>
  );
};

export default ProductSlider;
