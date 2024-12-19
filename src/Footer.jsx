
import { CiLocationOn } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const Footer = () => {

    return (
       
        <div>

        <div className="  mt-20  ">
        <hr className=" mb-12 "></hr>
        <div className=" ml-16 mr-16 ">
        <div className=" flex-col md:flex-row lg:flex-row flex justify-start gap-32 ">                
        <div>
        <div>
        <p className=" text-2xl droFont text-black ">Contact Us</p>
        <p className=" mt-5 droFont text-gray-400 ">We are a team of designers and developers who<br></br> creates high quality premium Shopify themes.</p>
        </div>
        <div className=" flex items-center gap-2 droFont mt-5">
        <p><CiLocationOn className=" h-[25px] w-[25px] "></CiLocationOn></p>
        <p className=" droFont text-gray-400 ">No 40 Baria Sreet 133/2, NewYork, USA.</p>
        </div>
        <div className=" flex items-center gap-2 droFont mt-4  ">
        <p><CiMobile3 className=" h-[25px] w-[25px] "></CiMobile3></p>
        <p className=" droFont text-gray-400 ">(012) 800 456 789</p>
        </div>
        <div className=" flex items-center gap-2 droFont mt-4 ">
        <p><HiOutlineMail className=" h-[25px] w-[25px] "></HiOutlineMail></p>
        <p className=" droFont text-gray-400 ">support@masstechnologist</p>
        </div>
        </div>
        <div>
        <p className=" text-2xl droFont ">MAIN MENU</p>
        <p className=" mt-3 droFont text-gray-400 ">Home</p>
        <p className=" mt-3 droFont text-gray-400 ">Shop</p>
        <p className=" mt-3 droFont text-gray-400 ">Top Products</p>
        <p className=" mt-3 droFont text-gray-400 ">Product Page</p>
        <p className=" mt-3 droFont text-gray-400 ">Pages</p>
        </div>
        <div>
        <p className=" text-2xl droFont ">MAIN MENU</p>
        <p className=" mt-3 droFont text-gray-400 ">Home</p>
        <p className=" mt-3 droFont text-gray-400 ">Shop</p>
        <p className=" mt-3 droFont text-gray-400 ">Top Products</p>
        <p className=" mt-3 droFont text-gray-400 ">Product Page</p>
        <p className=" mt-3 droFont text-gray-400 ">Pages</p>
        </div>
        </div>
        </div>     
        </div>
        
        <div className=" bg-cyan-400 text-white p-5 mt-5 -ml-5 ">
        <div className="  ml-16 mr-16 flex-col md:flex-row lg:flex-row flex justify-start gap-32 ">
        <div>
        <p className=" droFont ">Copyright © 2024 MassTechnologist.com. All rights reserved.</p>
        </div>
        <div className=" flex items-center gap-3 ">
        <p><FaCcVisa className=" h-[25px] w-[25px] "></FaCcVisa></p>
        <p><FaCcMastercard className=" h-[25px] w-[25px] "></FaCcMastercard></p>
        <p><FaCcAmex className=" h-[25px] w-[25px] "></FaCcAmex></p>
        <p><FaCcPaypal className=" h-[25px] w-[25px] "></FaCcPaypal></p>
        </div>
        <div className=" flex items-center gap-3 ">
        <p><IoLogoFacebook className=" h-[25px] w-[25px] "></IoLogoFacebook></p>
        <p><FaTwitter className=" h-[25px] w-[25px] "></FaTwitter></p>
        <p><FaLinkedin className=" h-[25px] w-[25px] "></FaLinkedin></p>
        <p><FaGoogle className=" h-[25px] w-[25px] "></FaGoogle></p>
        </div>
        </div>
        </div>

       

        </div>

       


    );
};

export default Footer;