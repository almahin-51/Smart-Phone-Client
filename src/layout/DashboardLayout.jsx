import { Link, Outlet } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logout } = useAuth();

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
        logout();
      }
    });
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div className="flex flex-col gap-3">
            <li className="border border-[#9a9a9a]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="border border-[#9a9a9a]">
              <Link to={"/dashboard"}>Profile</Link>
            </li>
            <li className="border border-[#9a9a9a]">
              <Link to={"/dashboard/manage-phone"}>Manage All Phone</Link>
            </li>
            <li className="border border-[#9a9a9a]">
              <Link to={"/dashboard/add-phone"}>Add Phone</Link>
            </li>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              className="btn btn-outline btn-error"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
