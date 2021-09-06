import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadphotos } from "../redux/pictureReducer";
import { useEffect } from "react";

const Random = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadphotos());
  }, [dispatch]);

  return (
    <div className="foto">
      <Link to="/">
        <h1>Random Unsplash Pictures</h1>
      </Link>
      <ul>
        {photos.map((photograph) => (
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

export default Random;
