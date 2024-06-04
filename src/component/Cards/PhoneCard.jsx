/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  const { _id, imageURL, title, offer, ratingRate, rating, price } = phone;

  return (
    <div className="card rounded-none w-96 bg-base-100 shadow-xl">
      <figure className="h-3/5 relative">
        <img src={imageURL} className="h-full w-full" alt="phones" />
        <div className="w-12 text-sm h-12 bg-black text-white flex justify-center items-center rounded-full absolute top-4 right-4">
          <p className="text-center leading-4 capitalize font-semibold">
            {offer}
          </p>
        </div>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h1 className="card-title">{title}</h1>
        <p>{ratingRate}</p>
        <p>{rating}</p>
        <div>
          <div>
            <p className="font-bold text-xl text-[#65cb50]">${price}</p>
          </div>
        </div>

        <div className="card-actions justify-between mt-4">
          <Link
            className="badge badge-outline bg-[#615EFC] text-white p-3"
            to={`/details/${_id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
