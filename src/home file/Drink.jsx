import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "../shop file/ShopSidebar";
import DrinkDetails from "./DrinkDetails";



const Drink = () => {

    const [drink, setDrink] = useState([])

    useEffect( () =>{
     
        fetch('drink.json')
        .then(res => res.json())
        .then(data => setDrink(data))


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
                drink.map( drink => <DrinkDetails drink={drink} ></DrinkDetails>  )
             }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Drink;