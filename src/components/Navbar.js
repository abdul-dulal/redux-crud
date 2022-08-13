import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            marginLeft: "10px",
            justifyContent: "center",
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          <Link
            to={"/"}
            style={{ textDecoration: "none", marginLeft: "10px" }}
          ></Link>

          <Link
            to={"/edit"}
            style={{ textDecoration: "none", marginLeft: "10px" }}
          ></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
