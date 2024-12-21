import { useEffect } from "react";
import { useState } from "react";
import WatchDetails from "./WatchDetails";
import ShopSidebar from "./ShopSidebar";



const Smart = () => {
    
    const [smart, setSmart] = useState([])


    useEffect( () =>{
    
      fetch('watch.json')
      .then( res => res.json())
      .then( data => setSmart(data) )   

    } , [])


    return (
        <div>

        <div>
        <div className=" mt-20 mb-10 ml-10 mr-10 ">
        <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-5">
        <div>
        <ShopSidebar></ShopSidebar>
        </div>
        <div className=" flex justify-center ">
        <div className=" grid  md:grid-cols-3 gap-5 ">
        {
        smart.map( smart => <WatchDetails smart={smart}></WatchDetails>  )
        }
        </div>
        </div>
        </div>
        </div>
        </div>
            
        </div>
    );
};

export default Smart;