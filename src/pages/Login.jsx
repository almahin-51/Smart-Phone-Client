import { Link, useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import GoogleLogin from "../component/auth/GoogleLogin";
import FacebookLogin from "../component/auth/FacebookLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [userInfo] = useAuthState(auth);
  const navigate = useNavigate();
  const { signIn, error } = useAuth();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password);
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center mb-10 font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
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
                {error && (
                  <p className="text-red-500 text-center mt-3">
                    {error.message?.slice(10)}
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <p className="text-center">
                Don&apos;t have any account ?{" "}
                <Link to={"/register"} className="text-red-500">
                  Register
                </Link>
              </p>
            </form>

            <div className="w-full ">
              <div className="flex justify-center gap-3 mx-7 mb-7">
                <GoogleLogin />
                <FacebookLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
