import { useEffect } from "react";
import { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import WalletDetails from "./WalletDetails";



const Wallet = () => {

    const [wallet, setWallet] = useState([])


    useEffect( () =>{
     
      fetch('wallet.json')
      .then( res => res.json())
      .then( data => setWallet(data))  


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
                wallet.map( wallet => <WalletDetails wallet={wallet} ></WalletDetails>   )
             }
        </div>
        </div>
        </div>
        </div>
            
        </div>
    );
};

export default Wallet;