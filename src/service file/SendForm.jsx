



const SendForm = () => {


    return (
        <div className="  mt-20 mb-20 ml-20 mr-20 ">

        <div className=" bg-white border-[1px] p-8 rounded-xl ">
        <div>
        <div>
        <p className=" text-2xl droFont text-black ">Send us your Queries</p>
        <div className=" mt-7 ">
        <hr></hr>
        </div>
        <form>
        <div className=" mt-10  ">
        <div className=" grid grid-cols-3 gap-5 "> 
        <div>
        <p className=" droFont text-black ">Name</p>
        <input className=" mt-2 border-[1px] w-full p-2 rounded-md " required placeholder="Name" type="text" name="name" />
        </div>
        <div>
        <p className=" droFont text-black ">Email</p>
        <input className=" mt-2 border-[1px] w-full p-2 rounded-md " required placeholder="Email" type="text" name="email" />
        </div>
        <div>
        <p className=" droFont text-black ">Phone</p>
        <input className=" mt-2 border-[1px] w-full p-2 rounded-md " required placeholder="Phone" type="text" name="phone" />
        </div>   
        </div> 
        </div>
        <div className=" mt-7 ">
        <div>
        <p className=" droFont text-black ">Message</p>
        <textarea className=" mt-2 border-[1px] w-full h-[200px] p-2 rounded-md " required placeholder="Phone"  name="Message" id=""></textarea>
        </div>   
        </div>
        <div className=" mt-5 flex items-center gap-3 droFont ">
        <input type="checkbox" name="Accept Terms" id="" />
        <p>I agree with the terms and conditions.</p>
        </div>
        <div className=" mt-7 ">
        <input className=" btn bg-cyan-400 w-full droFont text-white " type="submit" value="Send Message" />
        </div>
        </form>
        </div>  
        </div>
        </div>
            
        </div>
    );
};

export default SendForm;