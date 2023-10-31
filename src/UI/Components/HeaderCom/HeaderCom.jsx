import React from "react";
import "./HeaderCom.css";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function HeaderCom() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                <a href="tel:+91 1234567890" className="text-white">
                  +91 1234567890
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev Corner</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2 "
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p3" id="basic-addon2">
                  <BsSearch className="fs-4" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      {" "}
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex gap-30 align-items-center">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        Show Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="/">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
