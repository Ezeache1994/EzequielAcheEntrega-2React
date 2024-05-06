import React, { useState, useEffect } from 'react';

import productsData from "./DB.json"


function DBJsx() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Actualiza el estado con los datos del JSON
      setProducts(productsData.products);
    }, []);
  
    return (
      <div>
        <h1>Lista de Productos</h1>
        <ul>
          {products.map(product => (
              <li key={product.id}>
              <h4>{product.typeBusiness}</h4>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData.products);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData.products.find((product) => product.id === id));
      }, 2000);
    });
  };
  
  export default DBJsx;
  
  
  