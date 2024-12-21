import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import SkinDetails from "./SkinDetails";



const Skin = () => {
   
    const [skin, setSkin] = useState([])


    useEffect( () => {
    
       fetch('skin.json')
       .then( res => res.json())
       .then(data => setSkin(data)) 

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
        skin.map( skin => <SkinDetails skin={skin}></SkinDetails>  )
        }
        </div>
        </div>
        </div>
        </div>
        </div>
            
        </div>
    );
};

export default Skin;