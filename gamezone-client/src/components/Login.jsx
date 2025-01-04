import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

    const {signInUser,signInWithGoogle} =useContext(AuthContext);

    const location=useLocation();

    const navigate=useNavigate();

    const handleLogin = e =>{

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state? location.state : "/")
            
        })
        .catch((error) => {
            toast.error(error.message);
          });

    }


    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
            navigate('/'); 
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }



    return (
        <div className=" ml-0 md:ml-10">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold ">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />


            </div>

            <div className="form-control mt-6">
              <button className="btn bg-green-400">Login</button>
            </div>
          </form>
          <p className="ml-4 mb-4 text-center font-semibold">
            Don't Have an Account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </p>

          <div className="mx-auto py-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-success w-[300px] "
            >
              <FaGoogle></FaGoogle>
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>

    );
};

export default Login;