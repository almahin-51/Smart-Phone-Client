import { Link, useNavigate } from "react-router-dom";
// import {
//   useAuthState,
//   useCreateUserWithEmailAndPassword,
// } from "react-firebase-hooks/auth";
// import { useEffect, useState } from "react";
// import auth from "../firebase/firebase.config";

const Register = () => {
  //   const [userInfo] = useAuthState(auth);
  //   const navigate = useNavigate();
  //   const [passMatch, setPassMatch] = useState(true);

  //   const [createUserWithEmailAndPassword, error] =
  //     useCreateUserWithEmailAndPassword(auth);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const displayName = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     const confirm_password = form.confirm_password.value;

  //     if (password !== confirm_password) {
  //       setPassMatch(false);
  //     }
  //     if (password === confirm_password) {
  //       setPassMatch(true);
  //       createUserWithEmailAndPassword(email, password).then((data) => {
  //         if (data?.user?.email) {
  //           const userInfo = {
  //             name: displayName,
  //             email: data?.user?.email,
  //             photo: data?.user?.photoURL,
  //           };
  //           fetch("http://localhost:4000/user", {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(userInfo),
  //           }).then((res) => res.json());
  //         }
  //       });
  //     }
  //   };

  //   useEffect(() => {
  //     if (userInfo) {
  //       navigate("/");
  //     }
  //   }, [navigate, userInfo]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirm_password"
                className="input input-bordered"
                required
              />
              {/* {!passMatch && (
                <div className="py-2">
                  <p className="text-red-500">Password do not Match!</p>
                </div>
              )}
              {error && (
                <p className="text-red-500 text-center mt-3">
                  {error.message?.slice(10)}
                </p>
              )} */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>

            <p className="text-center">
              Already have an account ?{" "}
              <Link to={"/login"} className="text-red-500">
                Login
              </Link>
            </p>
          </form>

          <div className="  w-full ">
            <div className="flex flex-col gap-2 mx-7 mb-7">
              {/* <GoogleLogin /> */}
              this is GoogleLogin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
