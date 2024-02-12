import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions';

const HomePage = () => {
  const dispatch = useDispatch();

  // Example of using a selector to retrieve data from the Redux store
  const products = useSelector((state) => state.ProductsR);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    // Check if products is an array before updating state
    if (Array.isArray(products)) {
      setProductsList(products);
    }
  }, [products]);

  return (
    <>
      <h1>Product List</h1>
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

export default HomePage;
