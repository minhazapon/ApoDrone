import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ScootyDeTails from "./ScootyDeTails";




const Scooty = () => {

    const [scooty, setScooty] = useState([])

    useEffect( () => {
     
        fetch('scooty.json') 
        .then( res => res.json())
        .then( data => setScooty(data) )

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
        scooty.map( scooty =>  <ScootyDeTails scooty={scooty} ></ScootyDeTails>  )
        }
        </div>
        </div>
        </div>
        </div>
            
            
        </div>
    );
};

export default Scooty;