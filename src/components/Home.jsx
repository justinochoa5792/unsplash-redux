import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Pick a Section</h1>
      <Link className="m-2" to="/random">
        Random Images
      </Link>
      <Link to="/search">Search Images</Link>
    </div>
  );
};

export default Home;
