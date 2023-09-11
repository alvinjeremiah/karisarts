import React, { Fragment, useEffect } from "react";
//import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
// import comp from "../../images/comp.png"
import img1 from "../../images/IMG1.JPG"

const product ={
    //name:"Starry Night",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    //prices:"",
   // _id:"",
}

const Home = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const { loading, error, products } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getProduct());
//   }, [dispatch, error, alert]);

  return (
        <Fragment>
          <MetaData/> 

          <div className="banner">
            <comp/>

            <a href="#container">
              <button>
                Shop Now 
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
          <Product product = {product}/>
          <Product product = {product}/>
          <Product product = {product}/>
          <Product product = {product}/>
          <Product product = {product}/>
          <Product product = {product}/>
          </div>
          

          {/* <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}
        </Fragment>
  );
};
export default Home;