import React from "react";
import logo from "/flipcart.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Header = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-sm navbar-dark bg-light position-sticky"
        style={{ top: 0, zIndex: 1030 }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            <img src={logo} alt="" />
          </a>
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
              <button className="btn btn-white" type="button">
                <MdOutlineAccountCircle size={24} className="me-2" />
                Account
              </button>
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
