



const JeweDetails = ({jewe}) => {

    const {image, title, price} = jewe

    return (
        <div>

        <div>
        <div>
        <div className="card bg-base-100   w-[300px] shadow-xl hover:border-[1px] ">
        <figure className=" p-5">
        <img src={image} alt="Shoes" className="rounded-xl h-[200px] " />
        </figure>
        <div className=" flex justify-center -mb-5 ">
        <div className="rating rating-xs">
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input
        type="radio"
        name="rating-5"
        className="mask mask-star-2 bg-orange-400"
        defaultChecked />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
        </div>
        <div className="card-body items-center text-center">
        <h2 className="card-title text-xs droFont "> {title} </h2>
        <div className=" flex items-center gap-2 ">
         <p className=" droFont text-cyan-400 font-semibold ">{price}</p>
         <p className=" droFont line-through text-gray-400 ">$5000</p>
        </div>
        <div className="card-actions">
        <button className="btn droFont border-[1px] border-gray-300 text-gray-500 ">Add Cart</button>
        </div>
        </div>
        </div>
        </div>
        </div>
            
        </div>
    );
};

export default JeweDetails;