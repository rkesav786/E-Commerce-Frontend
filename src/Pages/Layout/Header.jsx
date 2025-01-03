import React from "react";
import logo from "/flipcart.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-sm navbar-light position-sticky"
        style={{ top: 0, zIndex: 5, background: "white" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand ms-2" to="/">
            <img src="./vetrikart_logo.png" alt="" width={50} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <div class="navbar-nav me-auto">
              <form class="d-flex ms-3">
                <input
                  class="form-control me-2"
                  type="text"
                  placeholder="Search"
                />
                <button class="btn btn-primary" type="button">
                  Search
                </button>
              </form>
            </div>
            <div>
              <Link to="account" style={{ textDecoration: "none" }}>
                <button className="btn btn-white" type="button">
                  <MdOutlineAccountCircle size={24} className="me-2" />
                  Account
                </button>
              </Link>
            </div>
            <div>
              <button className="btn btn-white" type="button">
                <AiOutlineShoppingCart size={24} className="me-2" />
                Cart
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
