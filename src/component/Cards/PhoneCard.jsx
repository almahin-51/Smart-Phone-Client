/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
  const { _id, imageURL, title, offer, ratingRate, rating, price } = phone;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-3/5">
        <img src={imageURL} className="h-full w-full" alt="Books" />
      </figure>
      <div className="card-body">
        <div className="card-title">
          {title}
          <span className="badge badge-secondary">{offer}</span>
        </div>
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
          <div>
            <div className="badge badge-outline mr-2">Country</div>
            <div className="badge badge-outline text-red-600">year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
