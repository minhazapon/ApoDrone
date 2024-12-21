import { useEffect } from "react";
import { useState } from "react";
import CycleDetails from "./CycleDetails";
import ShopSidebar from "./ShopSidebar";



const Cycle = () => {

    const [cycle, setCycle] = useState([])

    useEffect( () =>{

      fetch('cycle.json')
      .then(res => res.json())
      .then(data => setCycle(data))

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
                cycle.map( cycle =>  <CycleDetails cycle={cycle}></CycleDetails> )
             }
        </div>
        </div>
        </div>
        
        </div>
            
        </div>
    );
};

export default Cycle;