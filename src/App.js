import { useDispatch, useSelector } from "react-redux";
import { loadphotos } from "./redux/pictureReducer";
import { useEffect } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadphotos());
  }, [dispatch]);

  return (
    <div className="foto">
      <h1>Pictures</h1>
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
}
export default App;
