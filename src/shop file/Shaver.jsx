
import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ShaverDetails from "./ShaverDetails";



const Shaver = () => {

    const [Shaver, setShaver] = useState([])


    useEffect( () =>{

     fetch('shaver.json')
     .then( res => res.json())
     .then( data => setShaver(data))

    } , [])


    return (
        <div>
        <div className=" mt-20 mb-10 ml-10 mr-10 ">
        <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-5">
        <div>
        <ShopSidebar></ShopSidebar>
        </div>
        <div className=" flex justify-center ">
        <div className=" grid  md:grid-cols-3 gap-5 ">
        {
        Shaver.map( Shaver => <ShaverDetails Shaver={Shaver} ></ShaverDetails>  )
        }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Shaver;