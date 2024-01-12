import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Log In");
  ///Subscribing to the store using a selector
  const cart = useSelector((store)=> store.cart.items);
  console.log(cart)
  
  return (
    <div>
      <div className="h-10 bg-indigo-600 rounded-t-md  text-center text-white pt-2 tracking-wide w-full">
        Welcome to my react website
      </div>
      <div className="divide-y border-b-2  ml-10 mr-10 flex justify-between">
        <ul className="flex h-20">
          <li className="m-5 ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </li>
          <li className="m-5 active:text-cyan-400 text-teal-700">
            <Link to="/">Home</Link>
          </li>
          <li className="m-5">
            <Link to="/About">About Us</Link>
          </li>
          <li className="m-5">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="m-5">
            Cart - {cart.length} Items
          </li>
        </ul>

        <ul className="flex h-20">
          <li className="m-5 mr-10">
            <input 
              className="border-2 border-neutral-400 mr-3 rounded pl-1"
              type="text"
            />
            <label>Search</label>
          </li>
        </ul>
      </div>
    </div>
    // <div className="flex justify-between rounded-sm border-2">
    //   <div className="logo-container">
    //     <img className="w-44" src={LOGO_URL} />
    //   </div>
    //   <div className="flex items-center">
    //     <ul className="flex text-xl">
    //       <li className="px-4">
    //       <Link to="/">Home</Link>
    //       </li>
    //       <li className="px-4">
    //         <Link to="/About">About Us</Link>
    //       </li>
    //       <li className="px-4">
    //         <Link to="/Contact">Contact Us</Link>
    //       </li>
    //       <li className="px-4" >Cart</li>
    //       <button
    //         className="login-btn mr-3"
    //         onClick={() =>
    //           btnName == "Log In" ? setBtnName("Log Out") : setBtnName("Log In")
    //         }
    //       >
    //         {btnName}
    //       </button>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
