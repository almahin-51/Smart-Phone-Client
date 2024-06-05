/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

const EditProfile = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);

  useEffect(() => {
    async function load() {
      const data = await axios.get(
        `https://smart-phone-server.onrender.com/user/get/${id}`
      );
      if (data.status === 200) {
        setUser(data.data);
      }
    }
    load();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You want to Update the user?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Successfully Update the user!", {
          icon: "success",
        });
        handleUpdateUser(e);
      }
    });
  };

  const handleUpdateUser = (e) => {
    const form = e.target;
    const name = form.name.value;
    const displayName = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const photoURL = form.photoURL.value;

    const userData = {
      name,
      email,
      address,
      phone,
      photoURL,
    };

    //firebase user update
    updateProfile({ displayName, photoURL });

    const updated = fetch(
      `https://smart-phone-server.onrender.com/user/${user?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (updated) {
      navigate("/dashboard");
      console.log("successfully updated");
    }
  };

  return (
    <div className="w-full card shadow-xl p-10">
      <h1 className="text-4xl mb-4 font-bold">Edit users</h1>
      <form onSubmit={handleUpdate} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Name</label>
          <input
            defaultValue={user?.name}
            type="text"
            name="name"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Email</label>
          <input
            disabled
            type="text"
            value={user?.email}
            name="email"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Address</label>
          <input
            type="text"
            defaultValue={user?.address}
            name="address"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phone"
            defaultValue={user?.phone}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Photo</label>
          <textarea
            type="text"
            defaultValue={user?.photoURL}
            name="photoURL"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"Submit"}
            className="w-full btn py-3 px-5 border btn-info text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
