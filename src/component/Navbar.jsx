import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import auth from "../firebase/firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Successfully logout!", {
          icon: "success",
        });
        signOut();
      }
    });
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/all-phones"}>Phones</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <Link className="text-2xl" to="/">
          Smart Phone
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <Link to={"/all-phones"}>Phones</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Registration
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          {toggle && (
            <div className="absolute top-16 drop-shadow-2xl bg-white rounded-lg p-5">
              <div>
                <Link to={"/dashboard"} className="btn btn-outline">
                  Dashboard
                </Link>
              </div>
              <div className="mt-3">
                <button
                  className="btn btn-outline w-full"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}

          <div onClick={handleToggle} className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-11">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="User pic" />
              ) : (
                <span>{user?.email?.slice(0, 1)}</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
