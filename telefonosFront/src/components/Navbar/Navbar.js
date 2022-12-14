import React, { useEffect } from "react";
import axios from "axios";
import { Link, Navigate, renderMatches, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let nav = useNavigate();

  function logOut() {
    nav("/");
    localStorage.clear();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link to={"/"}>
            {" "}
            <a className="navbar-brand me-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3616/3616215.png"
                height="20"
                alt="MDB Logo"
                loading="lazy"
                style={{ marginTop: -1 + "px" }}
              />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>
                  {" "}
                  <a className="nav-link">Telefonos S.A</a>
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              {localStorage.getItem("token") == null ? (
                <Link to={"/login"}>
                  <button type="button" className="btn btn-light px-3 me-2">
                    Login
                  </button>
                </Link>
              ) : null}
              {localStorage.getItem("token") == null ? (
                <Link to={"/registro"}>
                  <button type="button" className="btn btn-dark px-3 me-2">
                    Sign up
                  </button>
                </Link>
              ) : null}

              {localStorage.getItem("token") != null ? (
                <Link to={"/"}>
                  <button
                    type="button"
                    className="btn btn-danger px-3 me-2"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </Link>
              ) : null}
              <a
                className="btn btn-dark px-3"
                href="https://github.com/gperez2018345"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
