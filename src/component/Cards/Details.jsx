import axios from "axios";
import { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { useParams } from "react-router-dom";

const Details = () => {
  const [phone, setPhone] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function load() {
      const data = await axios.get(`http://localhost:3000/phones/${id}`);
      if (data.status === 200) {
        setPhone(data.data);
      }
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone]);

  return (
    <div className="mx-24 my-32">
      <div className="card p-10 lg:card-side bg-base-100 shadow-xl w-full">
        <figure className="w-full">
          <img
            src={phone?.imageURL}
            className="w-[600px] hover:scale-150 hover:cursor-zoom-in"
            alt="phones"
          />
        </figure>
        <div className="mr-16 ml-8 flex items-center w-full">
          <div>
            <div className="text-4xl relative font-bold flex items-center mb-5">
              {phone?.title}
              {phone?.offer && (
                <div className="w-12 text-sm h-12 bg-black text-white flex justify-center items-center rounded-full absolute right-0">
                  <p className="text-center leading-4 capitalize font-semibold">
                    {phone?.offer}
                  </p>
                </div>
              )}
            </div>
            <p className="text-lg mb-1">
              <span className="font-semibold">Description: </span>
              <span className="text-justify text-[#3d3d3d]">
                {phone?.description}
              </span>
            </p>
            <p className="font-semibold mb-1">
              Rating: <span className="text-red-500">{phone?.rating}</span>
            </p>
            <p className="font-semibold mb-1">
              Rating Rate:{" "}
              <span className="text-yellow-600">{phone?.ratingRate}</span>
            </p>

            <p className="text-4xl font-bold mt-6 mb-2">${phone?.price}</p>
            <button className=" btn my-5 rounded-full px-10 shadow-lg bg-[#77b748] text-white text-lg">
              <SlBasket className="mr-1 font-bold" /> Add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
