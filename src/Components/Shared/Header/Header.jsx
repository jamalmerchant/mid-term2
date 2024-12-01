import React from 'react';
import img from "../../../public/jamal.jpg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-lime-500 shadow-xl">
  <div className="flex-1">
    <a className="btn btn-ghost text-white">MERCHANT <br className='text-lime-700'></br> MART</a>
  </div>
  <div className="flex-none text-white">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to='/'>Home</Link>
        </li>
      <li>
        <Link to='/'>About</Link>
        </li>
      <li>
        <Link to='/'>Contact</Link>
        </li>
      <li>
        <Link to='/Product'>Product</Link>
        </li>
      <li>
        <Link to='Sign-Up/'>Sign Up</Link>
        </li>

        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
             src="jamal.jpg"
            alt={img}
             />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
     
    </ul>
  </div>
</div>
    );
};

export default Header;