import { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import BackDetails from "./BackDetails";



const Backpack = () => {

    

    const [back, setBack] = useState([])


    useEffect( () => {
       
     fetch('https://raw.githubusercontent.com/minhazapon/ApoDro--react.js-project/refs/heads/main/public/backpack.json')
     .then( res => res.json())
     .then( data => setBack(data) )
   
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
                     back.map( back => <BackDetails back={back}></BackDetails>  )
                  }
             </div>
             </div>
             </div>
            
        </div>
    );
};

export default Backpack;