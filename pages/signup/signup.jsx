import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "@/styles/signup.module.css";
import Link from "next/link";

const Signup = () => {
  return (
    <div className={style.bg}>
      <div className={style.overlay}>
        <section className="vh-100 style.gradient-custom">
          <div className={`container py-5 h-100 ${style.main}`}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <form className={`row g-3 needs-validation my-3 ${style.main}`}>
                <div className="row g-3 needs-validation my-3 bg-white p-2 text-dark bg-opacity-55 rounded-4">
                  <div className={style.logo}>
                    <img className="ps-4" src="/logo.svg" alt="" />
                  </div>
                  <div>
                    <h1 className={`pt-4 ${style.hello}`}>Hello,</h1>
                    <h3 className={style.greetingtext}>Welcome Farmer's</h3>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      id="validationCustom01"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control"
                      id="validationCustom02"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="input-group has-validation">
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        id="validationCustomUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <div className="invalid-feedback">
                        Please choose a unique password
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="number"
                      placeholder="Phone No."
                      className="form-control"
                      id="validationCustom03"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="number"
                      placeholder="CNIC"
                      className="form-control"
                      id="validationCustom05"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid CNIC
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="list-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select Your role
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item">Admin</a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Seller
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Customer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="date"
                      placeholder="Age"
                      className="form-control"
                      id="validationCustom05"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide proper age
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="list-group">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Gender
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item">Male</a>
                        </li>
                        <li>
                          <a className="dropdown-item">Female</a>
                        </li>
                        <li>
                          <a className="dropdown-item">Other</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form7Example4"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary" type="button">
                      Sign Up
                    </button>
                  </div>
                  <div className="">Already a member<Link href="/login/login">Login</Link></div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;

{
  /* <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-white text-dark">
                  <div className="card-body p-5 text-center">
                    <img className="" src="/logo.svg" alt="" />
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <div className="container-lg">
                        <div>
                          <h1 className={`pt-4 ${style.hello}`}>Hello,</h1>
                          <p className={style.greetingtext}>Welcome Farmer's</p>
                        </div>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeEmailX"
                          placeholder="Name"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typePasswordX"
                          placeholder="Email"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          placeholder="Password"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="number"
                          id="typePasswordX"
                          placeholder="Phone"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="number"
                          id="typePasswordX"
                          placeholder="CNIC"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <button
                        className="btn btn-success btn-block px-5"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>

                    <div>
                      <p className="mb-0">
                        Already a user
                        <Link href="/login/login">Login</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */
}
