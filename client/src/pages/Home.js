import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Home = (props) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div>
      <h1>Welcome to our e-commerce site!</h1>
      {/* Add your e-commerce components and content here */}
      <Card />
    </div>
  );
};

export default Home;