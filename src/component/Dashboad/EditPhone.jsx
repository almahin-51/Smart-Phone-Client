import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const EditPhone = () => {
  const { id } = useParams();
  console.log(id);

  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const data = await axios.get(`http://localhost:3000/phones/${id}`);
      if (data.status === 200) {
        setPhone(data.data);
      }
    }
    load();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "You want to Update the phone?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Successfully Update the phone!", {
          icon: "success",
        });
        handleUpdatePhone(e);
      }
    });
  };

  const handleUpdatePhone = async (e) => {
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const offer = form.offer.value;
    const imageURL = form.imageURL.value;
    const ratingRate = form.ratingRate.value;
    const rating = form.rating.value;

    const phoneData = {
      imageURL,
      title,
      offer,
      ratingRate,
      rating,
      price,
    };

    const updated = await axios.patch(
      `http://localhost:3000/phones/${id}`,
      phoneData
    );
    if (updated.status === 200) {
      navigate("/dashboard/manage-phones");
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4 font-bold">Edit phones</h1>
      <form onSubmit={handleUpdate} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={phone?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="">Price</label>
          <input
            type="text"
            defaultValue={phone?.price}
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image URL</label>
          <input
            type="text"
            name="imageURL"
            defaultValue={phone?.imageURL}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Rating</label>
          <input
            type="text"
            defaultValue={phone?.rating}
            name="rating"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Rating Rate</label>
          <input
            type="number"
            defaultValue={phone?.ratingRate}
            name="ratingRate"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Offer</label>
          <input
            type="text"
            defaultValue={phone?.offer}
            name="offer"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Edit phone"}
            className="w-full btn py-3 px-5 border btn-warning"
          />
        </div>
      </form>
    </div>
  );
};

export default EditPhone;
