import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure()
    const {data: users= [], refetch} = useQuery(['users'], async() =>{
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
          method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
          if(data.modifiedCount){
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }

      const handleMakeInstructor = (user) =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
          method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
          if(data.modifiedCount){
            refetch()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Instructor Now!`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }



    return (
        <div className='w-full'>
        <h2 className='font-semibold text-3xl my-4'>Total Users: {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Instructor</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role === 'admin' ? 'Admin' : 
                      <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-500 text-white">Admin</button>
                    }</td>
                    <td>{user.role === 'instructor' ? 'Instructor' : 
                      <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-red-500 text-white">Instructor</button>
                    }</td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
    </div>
    );
};

export default ManageUsers;