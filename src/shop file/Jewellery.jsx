import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import JeweDetails from "./JeweDetails";



const Jewellery = () => {

    const [jewe, setJewe] = useState([])


    useEffect( () =>{
      
    fetch('jwllery.json')
    .then( res => res.json())
    .then( data => setJewe(data))


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
                    jewe.map( jewe => <JeweDetails jewe={jewe}></JeweDetails>  )
                 }
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Jewellery;