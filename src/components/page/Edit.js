import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBooks } from "../redux/Bookslice";
const Edit = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(location.state?.id);
  const [BookName, setBookName] = useState(location.state?.BookName);
  const [author, setAuthor] = useState(location.state?.author);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateBooks({
        id,
        BookName,
        author,
      })
    );
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <form onSubmit={handleUpdate}>
          <label className="block">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={BookName}
            className="h-12 rounded focus:ring placeholder:text-purple-600 w-64 px-4 bg-gray-200 block my-2"
            onChange={(e) => setBookName(e.target.value)}
          />
          <label style={{ display: "block" }}> Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            className="h-12 rounded focus:ring placeholder:text-purple-600 w-64 px-4 bg-gray-200 block my-2"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="submit"
            value="update book"
            className="bg-purple-600 text-white h-12 w-32 mt-6 rounded cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Edit;
