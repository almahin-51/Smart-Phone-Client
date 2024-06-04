import { useEffect, useState } from "react";
import PhoneCard from "../component/Cards/PhoneCard";

const AllPhones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:3000/phones");
      const phoneData = await res.json();
      setPhones(phoneData);
    }
    load();
  }, [phones]);

  return (
    <div className="px-16 pb-16">
      <div className=" my-12  text-center">
        <h1 className="text-3xl pb-2 font-bold border-b-2 inline-block">
          All Phones
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        {phones?.map((phone) => (
          <PhoneCard key={phone._id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default AllPhones;
