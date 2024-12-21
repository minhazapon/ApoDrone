import { useEffect } from "react";
import { useState } from "react";
import CoffeDeatils from "./CoffeDeatils";
import ShopSidebar from "./ShopSidebar";



const CoffeMaker = () => {

    const [coffe, setCoffe] = useState([])

    useEffect( () =>{
     
    fetch('coffeMaker.json')
    .then(res => res.json())
    .then(data => setCoffe(data))

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
                coffe.map( coffe =>  <CoffeDeatils coffe={coffe}></CoffeDeatils> )
             }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default CoffeMaker;