import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Link classname="productCard" to={product._id}>
        <img src={product.images[0].url} alt={product.name}/>

    </Link>
  )
}

export default Product