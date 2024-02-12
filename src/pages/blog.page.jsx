import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from '../store/actions';

const BlogPage = (props) => {
  debugger;
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    debugger
    props.getProducts();
  }, []);

  useEffect(() => {
    // Check if products is an array before updating state
    if (Array.isArray(props.products)) {
      setProductsList(props.products);
    }
  }, [props.products]);



  return (
    <>
      <h1>Blog List</h1>
      <ul>
        {productsList.length > 0 ? (
          productsList.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>

    </>
  );
};


const mapStateToProps = (state) => ({ products: state.ProductsR });
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getProducts,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
