


const BlogDetails = ({blog}) => {

    const {image, title, para} = blog

    return (
        <div>
        <div className="hero bg-white mt-10 border-[1px]">
        <div className="hero-content flex-col lg:flex-row">
        <img
        src={image}
        className="max-w-sm rounded-lg shadow-xl w-full " />
        <div>
        <h1 className="text-2xl font-bold droFont "> {title} </h1>
        <p className="py-6 droFont text-gray-400 ">
        {para}
        </p>
        <button className="btn bg-cyan-400 droFont text-white ">Read More</button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default BlogDetails;