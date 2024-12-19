import { useEffect } from "react";
import { useState } from "react";
import DroneDetails from "./DroneDetails";



const Drone = () => {


    const [ drone, setDrone ] = useState([])


    useEffect( () =>{
    fetch('https://raw.githubusercontent.com/minhazapon/ApoDro--react.js-project/refs/heads/main/public/drone.json')
    .then( res => res.json())
    .then(data => setDrone(data))
    } , [])

    return (
        <div className=" mt-20 mb-10 ml-10 mr-10 ">

        <div>
        <div>
        <p className=" text-center text-gray-500 droFont text-xl ">Featured products</p>
        <p className=" text-center text-black mt-5 droFont text-4xl ">DRONE PRODUCTS</p>
        </div>


            <div className=" flex justify-center mt-10 ">
             <div className=" grid  md:grid-cols-4 gap-10 ">

                  {

                      drone.map( drone => <DroneDetails drone={drone} ></DroneDetails> )
                  
                  }
                    

             </div>
            </div>


            </div>
            
        </div>
    );
};

export default Drone;