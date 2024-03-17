import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";

const Home = (props) => {

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  let allProducts;
  let productList;
  let trendingProducts;

  if (data) {
    allProducts = data?.allProducts[0];
    trendingProducts = data?.allProducts?.slice(1, 3);
    productList = data?.allProducts?.slice(0);
  }

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to my e-commerce site!</h1>
      <h2 style={{ textAlign: 'center' }}>Here's some popular items!</h2>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
          {productList?.map((product) => (
            <Card
            key={product._id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
          ))}
        </Box>
    </div>
  );
};

export default Home;