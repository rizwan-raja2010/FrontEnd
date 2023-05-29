import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "@/styles/login.module.css";
import Link from "next/link";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  // handleChange=(current)=>{
  //   let e={...emailError}
  //   setEmailError(current)
  // }
  function submitHandler() {
    if (!email) {
      setEmailError("Please enter the email");
    } else if (!password) {
      setPasswordError("Please enter the password");
    }
    return;
  }
  return (
    <div className={style.bg}>
      <div className={style.overlay}>
        <section className="vh-100 style.gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-white text-dark">
                  <div className="card-body">
                    <img className="" src="/logo.svg" alt="" />
                    <div className={`mb-md-5 mt-md-4 pb-5 ${style.contentsection}`}>
                      <div className="container-lg">
                        <div>
                          <h1 className={`pt-4 ${style.hello}`}>Hello,</h1>
                          <p className={style.greetingtext}>Welcome Farmer's</p>
                        </div>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
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

                      <p className="small mb-5 pb-lg-2 text-end">
                        <Link href="/forgot/forgot">Forgot your password?</Link>
                      </p>
                      <div className="text-center">
                        <button
                          className="btn btn-success btn-block px-5"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account?
                        <Link href="/signup/signup">Signup</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    // <div className={style.main}>
    //   <div className={style.overlay}>
    //     <div className={`p-4 border rounded-4 ${style.inner_section}`}>
    //       <div className={style.background}>
    //         <div className={style.logo}>
    //           <img className="ps-4" src="/logo.svg" alt="" />
    //         </div>
    //         <div className="container-lg">
    //           <div>
    //             <h1 className={`pt-4 ${style.hello}`}>Hello,</h1>
    //             <p className={style.greetingtext}>Welcome Farmer's</p>
    //           </div>
    //           <div className="d-flex justify-content-center">
    //             <div className={style.input_group}>
    //               <p>Login to manage your account</p>

    //               <input
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 className="border border-secondary rounded-3"
    //                 type="text"
    //                 placeholder="Email"
    //               />
    //               {emailError && <div>{emailError}</div>}
    //               <div className="py-2">
    //                 <input
    //                   value={password}
    //                   onChange={(e) => setPassword(e.target.value)}
    //                   className="border border-secondary rounded-3"
    //                   type="password"
    //                   name=""
    //                   id=""
    //                   placeholder="Password"
    //                 />
    //                 {passwordError && <div>{passwordError}</div>}
    //               </div>
    //               <div className="text-end">
    //                 <Link href="/forgot/forgot">Forgot your password?</Link>
    //               </div>
    //               <button
    //                 onClick={submitHandler}
    //                 className={`btn btn-primary btn-lg ${style.button}`}
    //               >
    //                 Login
    //               </button>
    //               <div className="py-4"></div>
    //               <p>
    //                 Dont have an account?{" "}
    //                 <Link href="/signup/signup">Signup</Link>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
