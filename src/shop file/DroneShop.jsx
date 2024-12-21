import { useEffect, useState } from "react";
import DroDetails from "./DroDetails";
import ShopSidebar from "./ShopSidebar";



const DroneShop = () => {

    const [dro, setDro] = useState([])

    useEffect( () =>{

     fetch('drone.json')
     .then(res => res.json())
     .then( data => setDro(data) )
     
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
                dro.map( dro =>  <DroDetails dro={dro} ></DroDetails>  )
             }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default DroneShop;