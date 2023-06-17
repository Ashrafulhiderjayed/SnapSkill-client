import React, { useContext } from "react";
import useClasses from "../../../hooks/useClasses";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const { user } = useContext(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(
    ["pependingClasses"],
    async () => {
      const res = await axiosSecure.get("/pendingClasses");
      return res.data;
    }
  );

  const handleApproved = (cls) => {
    fetch(`https://summer-photo-camp-server.vercel.app/class/approved/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          // setDiasabled(true)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Approve Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (cls) => {
    fetch(`https://summer-photo-camp-server.vercel.app/class/deny/${cls._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          // setDiasabled(true)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Denyed`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className='w-full'>
      <div className='text-center my-8'>
        <h2 className='text-3xl uppercase py-4'>Manage Classes</h2>
      </div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={cls._id}>
                <th>{index + 1}</th>
                <td>
                  <img src={cls.image} alt='' />
                </td>
                <td>{cls.class_name}</td>
                <td>{cls.instructor_name}</td>
                <td>{cls.instructor_email}</td>
                <td>{cls.available_seats}</td>
                <td>{cls.price}</td>
                <td>
                  <div className='flex'>
                    {cls.status == "approved" || cls.status == "denied" ? (
                      <>
                        <div className='flex gap-2'>
                          <button
                            disabled
                            className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
                          >
                            Approved
                          </button>
                          <button
                            disabled
                            className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
                          >
                            Deny
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='flex gap-2'>
                          <button
                            onClick={() => handleApproved(cls)}
                            className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
                          >
                            Approved
                          </button>
                          <button
                            onClick={() => handleDeny(cls)}
                            className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
                          >
                            Deny
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
