import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <section className="register container">
        <div className="reg-form container">
          <h1>Register Here</h1>
          <p>
            Enter your personal details and start your new grocery experience
            with us.
          </p>
          <input className="name" type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="reg-submit" type="submit">
            Submit
          </button>
          <p id="member-login">
            <Link to="/login">
              Already a member?{" "}
              <span className="pantriful-orange">Sign in</span>
            </Link>
          </p>
        </div>
        <img
          className="container register-img"
          src="images/register-img.png"
          alt=""
        />
      </section>
      // <div className="register">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-8 m-auto">
      //         <h1 className="display-6 mb-2 text-center">Sign Up</h1>
      //         <p className="lead mb-3 text-center">
      //           Create your Pantriful account
      //         </p>
      //         <form action="create-profile.html" className="mb-5">
      //           <div className="form-group">
      //             <input
      //               type="text"
      //               className="form-control mb-4 form-control-lg"
      //               placeholder="Name"
      //               name="name"
      //               required
      //             />
      //           </div>
      //           <div className="form-group">
      //             <input
      //               type="email"
      //               className="form-control mb-4 form-control-lg"
      //               placeholder="Email Address"
      //               name="email"
      //             />
      //           </div>
      //           <div className="form-group">
      //             <input
      //               type="password"
      //               className="form-control mb-4 form-control-lg"
      //               placeholder="Password"
      //               name="password"
      //             />
      //           </div>
      //           <div className="form-group">
      //             <input
      //               type="password"
      //               className="form-control mb-4 form-control-lg"
      //               placeholder="Confirm Password"
      //               name="password2"
      //             />
      //           </div>
      //           <input
      //             type="submit"
      //             className="btn p-3 btn-info btn-block mt-4"
      //           />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Register;
