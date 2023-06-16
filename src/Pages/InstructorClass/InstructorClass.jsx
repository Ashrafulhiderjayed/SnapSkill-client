
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyClassRow from "../MyClassRow/MyClassRow";

const InstructorClass = () => {
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [], refetch } = useQuery(
    ["myClasses"],
    async () => {
      const res = await axiosSecure.get(`/myClasses?email=${user.email}`);
      return res.data;
    }
  );
  return (
    <div className='overflow-x-auto'>
      <table className='table  w-full'>
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Status</th>
            <th>Available Seats</th>
            <th>Enrolled Student</th>
            <th>FeedBack</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((cls, index) => (
            <MyClassRow
              key={cls._id}
              cls={cls}
              index={index}
              refetch={refetch}
            ></MyClassRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstructorClass;
