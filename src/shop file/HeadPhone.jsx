import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import HeadDetails from "./HeadDetails";



const HeadPhone = () => {
    
    const [head, setHead] = useState([])

    useEffect( () => {

    fetch('headphn.json')
    .then( res => res.json())
    .then( data => setHead(data) )

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
                head.map( head => <HeadDetails head={head}></HeadDetails> )
             }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default HeadPhone;