import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import BagDetails from "./BagDetails";




const Bag = () => {

    const [Bag, setBag] = useState([])

    useEffect( () => {
     
        fetch('https://raw.githubusercontent.com/minhazapon/ApoDro--react.js-project/refs/heads/main/public/bag.json')
        .then( res => res.json())
        .then( data => setBag(data))

    } , [])

    return (
        <div className=" mt-20 mb-10 ml-10 mr-10 ">

             <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-5">
             <div>
             <ShopSidebar></ShopSidebar>
             </div>
             <div className=" flex justify-center ">
             <div className=" grid  md:grid-cols-3 gap-5 ">
                  {
                     Bag.map( Bag => <BagDetails Bag={Bag}></BagDetails>  )
                  }
             </div>
             </div>
             </div>
            
        </div>
    );
};

export default Bag;