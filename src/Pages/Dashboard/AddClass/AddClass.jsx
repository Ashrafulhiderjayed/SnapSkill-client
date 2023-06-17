import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    console.log(data);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            class_name,
            instructor_name,
            instructor_email,
            available_seats,
            price,
          } = data;
          const newClass = {
            class_name,
            instructor_name,
            instructor_email,
            price: parseFloat(price),
            available_seats: parseFloat(available_seats),
            image: imgURL,
            status: "pending",
            students: 0,
          };
          // console.log(newClass)

          axiosSecure.post("/add-class", newClass).then((data) => {
            console.log("after posting new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class Added Successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className='w-full px-10'>
      <div className='mx-auto text-center md:w-4/12 my-8'>
        <h2 className='text-3xl uppercase py-4'>Add a Class</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full '>
          <label className='label'>
            <span className='label-text font-semibold'>Class Name*</span>
          </label>
          <input
            type='text'
            placeholder='Class Name'
            {...register("class_name", { required: true, maxLength: 120 })}
            className='input input-bordered w-full '
          />
        </div>
        <div className='form-control w-full '>
          <label className='label'>
            <span className='label-text font-semibold'>Instructor Name*</span>
          </label>
          <input
            type='text'
            placeholder='Instructor Name'
            value={user.displayName}
            {...register("instructor_name", { required: true, maxLength: 120 })}
            className='input input-bordered w-full'
            readOnly
          />
        </div>
        <div className='form-control w-full '>
          <label className='label'>
            <span className='label-text font-semibold'>Instructor Email*</span>
          </label>
          <input
            type='text'
            placeholder='Instructor Email'
            value={user.email}
            {...register("instructor_email", {
              required: true,
              maxLength: 120,
            })}
            className='input input-bordered w-full'
            readOnly
          />
        </div>
        <div className='form-control w-full '>
          <label className='label'>
            <span className='label-text font-semibold'>Available Seats*</span>
          </label>
          <input
            type='number'
            placeholder='Available Seats'
            {...register("available_seats", { required: true })}
            className='input input-bordered w-full '
          />
        </div>
        <div className='form-control w-full '>
          <label className='label'>
            <span className='label-text font-semibold'>Price*</span>
          </label>
          <input
            type='number'
            placeholder='Price'
            {...register("price", { required: true })}
            className='input input-bordered w-full '
          />
        </div>
        <div className='form-control w-full my-4'>
          <label className='label'>
            <span className='label-text font-semibold'>item Image</span>
          </label>
          <input
            type='file'
            {...register("image", { required: true })}
            className='file-input file-input-bordered w-full '
          />
        </div>
        <input
          type='submit'
          className='btn btn-outline btn-sm mb-4'
          value='Add Class'
        />
      </form>
    </div>
  );
};

export default AddClass;
