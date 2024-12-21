
import { IoCheckmarkCircle } from "react-icons/io5";


const ShopSidebar = () => {
    return (
        <div className=" flex justify-center  ">
          
          <div>
 
            
            <div className=" bg-slate-100 w-[280px] p-5 rounded-xl ">
            <p className=" text-4xl droFont">Categories</p>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
            <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
            <p className=" text-xl droFont ">BackPack</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
              <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
              <p className=" text-xl droFont ">Bag</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
              <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
              <p className=" text-xl droFont ">Cycle</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
              <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
              <p className=" text-xl droFont ">Coffe Maker</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
              <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
              <p className=" text-xl droFont ">Drink</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
              <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
              <p className=" text-xl droFont ">Shoes</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
              <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
              <p className=" text-xl droFont ">Scooty</p>
            </div>
            </div>
            <div className=" mt-10 bg-slate-100 w-[280px] p-5 rounded-xl ">
            <p className=" text-4xl droFont">Availability</p>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
            <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
            <p className=" text-xl droFont ">In Stock</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
            <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
            <p className=" text-xl droFont ">Out Of Stock</p>
            </div>
            </div>
            <div className=" mt-10 ">
            <div class="bg-gray-100 rounded-lg shadow-lg p-6 w-[280px] max-w-md">
            <h2 class="text-2xl font-bold mb-4">Range Slider</h2>
            <div class="mb-4">
            <label for="price-range" class="block text-gray-700 font-bold mb-2">Price Range</label>
            <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min-max range</label>
            <input id="minmax-range" type="range" min="0" max="10" value="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            </div>
            <div class="flex justify-between text-gray-500">
            <span id="minPrice">$0</span>
            <span id="maxPrice">$1000</span>
            </div>
            </div>
            </div>
            <div className=" mt-10 bg-slate-100 w-[280px] p-5 rounded-xl ">
            <p className=" text-4xl droFont">Product type</p>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
            <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
            <p className=" text-xl droFont ">Stroller</p>
            </div>
            </div>
            <div className=" mt-10 bg-slate-100 w-[280px] p-5 rounded-xl ">
            <p className=" text-2xl droFont">Shop by Vendors</p>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
            <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
            <p className=" text-xl droFont ">Canada</p>
            </div>
            <div className=" flex items-center gap-2 cursor-pointer mt-4 hover:text-cyan-400 ">
            <p><IoCheckmarkCircle></IoCheckmarkCircle></p>
            <p className=" text-xl droFont ">Scota</p>
            </div>
            </div>
            <div>
            <img className=" w-[280px] mt-5 rounded-xl " src="https://elomus-theme.myshopify.com/cdn/shop/files/insta_drone_6.jpg?v=1613769451" alt="" />
            </div>

 
          </div>

            
        </div>
    );
};

export default ShopSidebar;