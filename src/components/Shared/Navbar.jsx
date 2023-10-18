import { NavLink } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import logo from '../../assets/logo.png'
const Navbar = () => {
   const Navlinks = <>
           <NavLink to='/' style={({ isActive }) => {
               return {
               textDecoration: isActive ? "underline" : "",
               color: isActive ? "purple" : "",
               };
               }}>
           Home</NavLink>
           
           <NavLink to='/addproduct' style={({ isActive }) => {
               return {
               textDecoration: isActive ? "underline" : "",
               color: isActive ? "purple" : "",
               };
               }}>
           Add Product</NavLink>
           <NavLink to='/mycart' style={({ isActive }) => {
               return {
               textDecoration: isActive ? "underline" : "",
               color: isActive ? "purple" : "",
               };
               }}>
           My Cart</NavLink>
           <NavLink to='/login' style={({ isActive }) => {
               return {
               textDecoration: isActive ? "underline" : "",
               color: isActive ? "purple" : "",
               };
               }}>
           Login</NavLink>
           
        </>
    

   return (
       <div>
           <div className="navbar bg-yellow-300">
           <div className="navbar-start">
               <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {Navlinks}
               </ul>
               </div>
        <div className="a">
               <h4 className="italic font-semibold ">Entertainment and Media Times</h4>
               <img className="w-12 h-12" src={logo} alt="" />
               
        </div>
           </div>
           <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 space-x-3">
                   {Navlinks}
               </ul>
           </div>
           <div className="navbar-end gap-4">
               <a href=""><BsCart size={30}/></a>
               <a className="bg-green-700 py-1 px-3 rounded-xl text-white">Signup</a>
           </div>
           </div>
           
       </div>
   );
};

export default Navbar;