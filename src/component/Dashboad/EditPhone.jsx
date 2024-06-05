import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const EditPhone = () => {
  const { id } = useParams();

  const [phone, setPhone] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get(`http://localhost:3000/phones/${id}`);
      if (data.status === 200) {
        setPhone(data.data);
      }
    }
    load();
  }, [phone]);

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
    const description = form.description.value;

    const phoneData = {
      imageURL,
      title,
      offer,
      ratingRate,
      rating,
      price,
      description,
    };

    const updated = await axios.patch(
      `http://localhost:3000/phones/${id}`,
      phoneData
    );
    if (updated.status === 200) {
      // navigate("/dashboard/manage-phones");
      console.log("successfully updated");
    }
  };

  return (
    <div className="flex gap-16">
      <div className="card lg:card-side bg-base-100 shadow-xl w-full">
        <figure className="w-full">
          <img
            src={phone?.imageURL}
            className="w-80 hover:scale-150 hover:cursor-zoom-in"
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
          </div>
        </div>
      </div>

      <div className="w-full card shadow-xl p-10">
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
            <label htmlFor="">Offer</label>
            <input
              type="text"
              defaultValue={phone?.offer}
              name="offer"
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
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              defaultValue={phone?.description}
              name="description"
              className="w-full py-3 px-5 border"
            />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value={"Sumit"}
              className="w-full btn py-3 px-5 border btn-info text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPhone;
