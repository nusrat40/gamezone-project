import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip } from "react-tooltip";
import { Typewriter } from 'react-simple-typewriter';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-green-300" : "hover:bg-green-300"}`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="all-review"
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-green-300" : "hover:bg-green-300"}`
          }
        >
          All Review
        </NavLink>
      </li>

      <li>
        <NavLink
          to="add-review"
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-green-300" : "hover:bg-green-300"}`
          }
        >
          Add Review
        </NavLink>
      </li>

      <li>
        <NavLink
          to="my-review"
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-green-300" : "hover:bg-green-300"}`
          }
        >
          My Review
        </NavLink>
      </li>

      <li>
        <NavLink
          to="watch-list"
          className={({ isActive }) =>
            `font-bold ${isActive ? "bg-green-300" : "hover:bg-green-300"}`
          }
        >
          WatchList
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-5 p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-3xl italic text-green-500">GAMEZONE</a> */}

      <a className="btn btn-ghost text-3xl italic text-green-500">
        <Typewriter
          words={['GAMEZONE']}
          loop={1}
          cursor={false}  // No cursor for the button text
          typeSpeed={100}
        />
      </a>


      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex justify-center items-center gap-2">
          <a className="my-anchor-element">
          <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </a>
          <Tooltip anchorSelect=".my-anchor-element" place="top">
  <p>{user.displayName}</p>
</Tooltip>
               
            
           

            <button onClick={logOut} className="btn">
              Log out
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <button className="btn ">
              <Link to="login">Log in</Link>
            </button>
            <button className="btn ">
              <Link to="register">Register</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
