import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaEye, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const {login, googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
  
      const formSubmit = (data) =>{

        login(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user 
            console.log(loggedUser)
            Swal.fire({
              title: 'User Login Successful.',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
            setError(' ')
            reset()
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
          const loggedUser = result.user 
          console.log(loggedUser)

          const saveUser = {name: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL}
          fetch('https://summer-photo-camp-server.vercel.app/users',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(() =>{
          navigate(from, { replace: true });

          setSuccess('User Login successful.')
          setError(' ')
    
        })
      })
    }
    
  return (
    <>
      <Helmet>
        <title>Summer Photo Camp | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-CreteRound font-semibold text-primary hover:text-primary2btn">Login now!</h1>
          </div>
          {/* <div className="card max-w-sm shadow-2xl bg-base-100"> */}
          <div className="card shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(formSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div>
                <input type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", { required: true })} name="password" className="input input-bordered" required/>
                </div>
                         {errors.email && <span className='text-red-600'>Password is required</span>}
              </div>
              <div className="form-control relative mt-6">
                <input
                  className="btn btn-primary font-CreteRound bg-primary hover:bg-primary2btn text-white font-bold"
                  type="submit"
                  value="Login"
                />
                <FaEye onClick={togglePasswordVisibility} className="password-toggle absolute left-96 mt-3 transform -translate-y-24 text-gray-600" />
              </div>
            </form>
            <p className="my-4 text-center">New to SUMMER CAMP? <Link className="text-orange-600 font-bold" to="/registration">Sign Up</Link></p>
                  <div className="text-center mb-2">
                  <Link><button onClick={handleGoogleLogin} className="btn btn-outline border-primary hover:text-primary2btn"><FaGoogle className=' text-red-500'/> Google Login</button></Link>
                </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Login;
