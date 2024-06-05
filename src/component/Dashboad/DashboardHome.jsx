/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState();
  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:3000/user/${user?.email}`);
      const userData = await res.json();
      setUserData(userData);
    }
    load();
  }, []);
  console.log(userData);
  return (
    <div className="border w-80 rounded-sm p-4 text-center shadow-xl ">
      <h4 className="font-bold text-3xl text-center my-3 text-[#ff0000]">
        My Profile
      </h4>
      <div className="my-3 mx-auto w-20 h-20 rounded-full overflow-hidden">
        {userData?.photoURL ? (
          <img className="w-auto h-full" src={userData?.photoURL} alt="" />
        ) : (
          <div
            style={{ width: "80px", height: "80px", fontSize: "40px" }}
            className="border flex justify-center items-center"
          >
            <h1>{userData?.email?.slice(0, 1).toLocaleUpperCase()}</h1>
          </div>
        )}
      </div>
      <div>
        <h5 className="m-0 pt-3 text-xl font-semibold">
          {userData?.name?.toUpperCase()}
        </h5>
        <p>{userData?.email}</p>
        <Link
          to={`/dashboard/edit-profile/${userData?._id}`}
          className="btn rounded-none btn-accent text-black my-5"
        >
          EDIT PROFILE
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
