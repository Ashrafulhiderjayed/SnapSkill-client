import React from 'react';
import useCart from '../../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum , 0)

    const handleDelete = (item) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://summer-photo-camp-server.vercel.app/carts/${item._id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }

    return (
        <div className='w-full'>
            <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center my-5'>
               <h3 className='text-3xl'>My Selected Classes: {cart.length}</h3>
               <h3 className='text-3xl'>Total Price: ${total}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Class</th>
                    <th>Class Name</th>
                    <th>Instructor Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr key={item._id}>
                            <td>
                              {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                  </div>
                                </div>                         
                            </td>
                            <td>
                              {item.class_name}
                            </td>
                            <td>{item.instructor_name}</td>
                            <td className='text-end'>${item.price}</td>
                            <td>
                              <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                            {/* //TODO: Payment  */}
                            <td>
                            <Link to={`/dashboard/payment/${item._id}`}><button className='btn btn-warning btn-sm'>PAY</button></Link>
                            </td>
                          </tr>   )
                    }
                </tbody>  
              </table>
            </div>
        </div>
    );
};

export default MyCart;