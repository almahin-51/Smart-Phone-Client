import { useEffect, useState } from "react";
import PhoneRow from "../Cards/PhoneRow";
import axios from "axios";

const ManageAllProduct = () => {
  const [phones, setPhones] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/phones");

      if (data?.status === 200) {
        setPhones(data?.data);
      }
    }
    load();
  }, [phones, setPhones]);

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-6 font-bold ">Manage All Books</h1>
      <table className="table table-zebra">
        <thead>
          <tr className="border">
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {phones?.map((phone) => (
            <PhoneRow key={phone?._id} phone={phone} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProduct;
