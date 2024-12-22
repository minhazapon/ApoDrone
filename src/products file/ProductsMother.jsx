import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from '../shop file/ShopSidebar'
import PDetails from "./PDetails";



const ProductsMother = () => {

    const [pro, setPro] = useState([])


    useEffect( () => {
    
      fetch('products.json')
      .then(res => res.json())
      .then(data => setPro(data))   


    } , [])


    return (

        <div className="  mt-20 mb-20 ml-10 mr-10 ">
        <div className=" flex justify-center gap-5 ">
        <div>
        <ShopSidebar></ShopSidebar>
        </div>
        <div className=" flex justify-center ">
        <div className=" grid  md:grid-cols-3 gap-5 ">
        {pro.map( pro => <PDetails pro={pro} ></PDetails> )}
        </div>
        </div>
        </div>  
        </div>
        
    );
};

export default ProductsMother;