import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [term, setTerm] = useState("");
  const [picture, setPicture] = useState([]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${term}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`,
      {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
        },
      }
    );
    console.log(response.data);
    setPicture(response.data);
  };
  return (
    <div className="text-center">
      <Link to="/">
        <h1>Search By Keyword</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>
          </div>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </form>
      <ul>
        {picture.results.map((photograph) => (
          <>
            <li className="bg-image hover-zoom ">
              <img src={photograph.urls.small} alt={photograph.id} />{" "}
            </li>
            <li> Username: {photograph.user.username}</li>
            {photograph.user.bio === null ? (
              ""
            ) : (
              <li> Bio: {photograph.user.bio}</li>
            )}

            <li> Likes: {photograph.likes}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Search;
