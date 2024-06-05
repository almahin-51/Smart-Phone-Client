import { Link } from "react-router-dom";
import swal from "sweetalert";

/* eslint-disable react/prop-types */
const PhoneRow = ({ phone }) => {
  const token = localStorage.getItem("token");
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "You want to Delete the Book?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:3000/phones/${phone?._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          // eslint-disable-next-line no-unused-vars
          .then(() => {
            swal({
              title: "Deleted!",
              text: "Your phone has been deleted.",
              icon: "success",
            });
            // window.location.reload();
          })
          .catch((error) => {
            if (error) {
              swal("Good job!", "You clicked the button!", "error");
            }
          });
      }
    });
  };

  return (
    <tr className="border">
      <th>{phone?._id}</th>
      <th>
        <img className="w-16" src={phone?.imageURL} alt="" />
      </th>
      <td>{phone?.title}</td>
      <td>${phone?.price}</td>
      <td>{phone?.rating}</td>
      <td className="flex gap-4 justify-center">
        <Link
          to={`/dashboard/edit-phone/${phone?._id}`}
          className="btn btn-md btn-outline btn-info px-6 text-whiteS"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-md text-red-500 hover:btn-error hover:text-white btn-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PhoneRow;
