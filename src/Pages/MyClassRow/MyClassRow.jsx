import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import UpdateClass from "./UpdateClass";

const MyClassRow = ({ cls, index, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const handleUpdate = (data) => {
    console.log(data);
    const url = `http://localhost:5000/updateClasses/${cls._id}`; // URL to send the PATCH request

    axios
      .patch(url, data)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Your Class Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
        }
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className='w-20 rounded-xl' src={cls?.image} alt='' />
      </td>
      <td>{cls.name}</td>
      <td>{cls.status}</td>
      <td>{cls.available_seats}</td>
      <td>{cls.students}</td>
      <td>{cls?.feedback}</td>

      <td>
        <button
          onClick={() => setShowModal(true)}
          className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
        >
          Update
        </button>
        {showModal ? (
          <UpdateClass
            key={cls._id}
            setShowModal={setShowModal}
            cls={cls}
            handleUpdate={handleUpdate}
          ></UpdateClass>
        ) : null}
      </td>
    </tr>
  );
};

export default MyClassRow;
