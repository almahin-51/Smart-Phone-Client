import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const AddPhone = () => {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    swal({
      title: "Are you sure?",
      text: "You want to Add the Phone?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Phone Added Successfully!", {
          icon: "success",
        });
        handleAddPhone(e);
      }
    });
  };

  const handleAddPhone = async (e) => {
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

    const dataPost = await axios.post(
      "https://smart-phone-server.onrender.com/phones",
      phoneData
    );
    if (dataPost.status === 200) {
      navigate("/dashboard/manage-phone");
      form.reset();
    }
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl my-6 mt-10 font-bold ">Add Book</h1>
      <form onSubmit={handleAdd} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title</label>
          <input
            required
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Offer</label>
          <input
            required
            type="text"
            name="offer"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Price</label>
          <input
            required
            type="text"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image URL</label>
          <input
            required
            type="text"
            name="imageURL"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Rating</label>
          <input
            required
            type="text"
            name="rating"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Rating Rate</label>
          <input
            required
            type="number"
            name="ratingRate"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Description</label>
          <textarea
            required
            type="text"
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"Add Phone"}
            className="w-full  py-3 px-5 border btn btn-warning"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPhone;
