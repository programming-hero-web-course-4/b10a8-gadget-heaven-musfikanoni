import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav class="lg:w-11/12 mx-auto lg:py-4 mt-5 rounded-t-3xl bg-[#9538E2]">
                <div class=" lg:w-10/12 mx-auto navbar flex max-w-full justify-between">
                    <div class="navbar-start flex lg:w-10/12 md:justify-normal justify-between md:w-6/12 w-full">
                        <div class="flex items-center gap-2">
                        <span class="lg:ps-0 ps-5">
                            {/* <img src="images/logo.webp" alt=""> */}
                        </span>
                        <a class="lg:text-xl text-lg lg:font-bold font-semibold text-white">Gadget Heaven</a>
                        </div>
                        <div class="dropdown dropdown-end">
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content shadow-lg bg-base-100 rounded-box z-[1] mt-3 w-52">
                            <li>
                            <div>
                                <i class="fa-regular fa-user py-2 px-3.5 text-xl text-gray-400 bg-white  border border-[#E9E9E9] rounded-full"></i>
                            </div>
                            </li>
                            <li><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        <div tabindex="0" role="button" class="btn btn-ghost md:hidden lg:hidden ml-2 mt-3">
                            <span class="bg-white text-[#737373]  p-2.5 border-[#E9E9E9] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            class="size-6">
                                <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div class="navbar-center lg:ml-[-200px] hidden md:block lg:flex">
                        <ul class="menu menu-horizontal text-base">
                            <li class="font-normal text-white bg-transparent"><NavLink to="/">Home</NavLink></li>
                            <li><a class="font-normal text-white"><NavLink>Statistics</NavLink></a></li>
                            <li><a class="font-normal text-white"><NavLink>Dashboard</NavLink></a></li>
                        </ul>
                    </div>
                    <div class="navbar-end hidden md:block">
                        <div class="flex gap-5 justify-end items-center">
                            <div className="bg-white text-xl border border-[rgba(11,11,11,0.1)] text-[#3A3A3A] rounded-full p-3">
                                <BsCart3></BsCart3>
                            </div>
                            <div className="bg-white text-xl border border-[rgba(11,11,11,0.1)] text-[#3A3A3A] rounded-full p-3">
                                <FaRegHeart></FaRegHeart>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;