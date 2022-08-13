import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addbooks, deleteBooks } from "../redux/Bookslice";
import { Link } from "react-router-dom";
const Showbooks = () => {
  const books = useSelector((book) => book.bookSlice.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    let BookName = e.target.book.value;
    let author = e.target.author.value;
    const post = { id: books.length + 1, BookName, author };
    dispatch(addbooks(post));
    e.target.book.value = "";
    e.target.author.value = "";
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="">
        <h1 className="text-xl  font-semibold">Add Book</h1>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="book"
            id="book"
            placeholder="Enter BookName"
            className="h-12 rounded focus:ring placeholder:text-purple-600 w-64 px-4 bg-gray-200 block my-5"
          />
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Enter Author"
            className="h-12 rounded focus:ring placeholder:text-purple-600  block w-64 px-4 bg-gray-200"
          />
          <input
            type="submit"
            value="Add Book"
            className="bg-purple-600 text-white h-12 w-32 mt-6 rounded cursor-pointer"
          />
        </form>
        <table className=" table-auto border-separate border-spacing-x-14 border-spacing-y-5	  border-slate-500">
          <thead>
            <tr className="ml-3">
              <th>ID</th>
              <th>Book Name </th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, author, BookName } = book;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{book.BookName}</td>
                    <td>{book.author}</td>
                    <td>
                      <Link to="/edit" state={{ id, author, BookName }}>
                        <button className="bg-gray-600 h-10 w-20 rounded text-white">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(book.id)}
                        className="bg-purple-600 h-10 w-20 rounded text-white ml-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Showbooks;
