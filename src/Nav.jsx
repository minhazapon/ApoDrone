import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TbWorldCog } from "react-icons/tb";



const Nav = () => {

    
    const nav = <>
    
       <li className=" droFont " ><NavLink to='/'>Home</NavLink></li>
       <li className=" droFont " ><NavLink to='/shop'>Shop</NavLink></li>
       <li className=" droFont " ><NavLink to='/product'>Products</NavLink></li>
       <li className=" droFont " ><NavLink to='/package'>Package</NavLink></li>
       <li className=" droFont " ><NavLink to='/about'>About</NavLink></li>
       <li className=" droFont " ><NavLink to='/service'>Service</NavLink></li>
    
    
    </>



    return (
        <div className=" flex items-center  ">


            <div className="navbar bg-base-100 shadow p-5 ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {nav}
                  </ul>
                </div>
                <div className=" flex items-center gap-2">
                 <img className=" h-[40px] w-[40px] " src="https://cdn-icons-gif.flaticon.com/15568/15568296.gif" alt="" />
                 <a className=" text-2xl droFont">ApoDro</a>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                 {nav}
                </ul>
              </div>
              <div className=" flex justify-end gap-5 ">
              <p><CiSearch className=" h-[30px] w-[30px] "></CiSearch></p>
              <p><CiShoppingBasket className="h-[30px] w-[30px] "></CiShoppingBasket></p>
              <p><CiSettings className=" h-[30px] w-[30px] "></CiSettings></p>
              <p><TbWorldCog className=" h-[30px] w-[30px] "></TbWorldCog></p>
              </div>
            </div>


        
            
        </div>
    );
};

export default Nav;