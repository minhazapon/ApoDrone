import { useEffect } from "react";
import { useState } from "react";
import BlogDetails from "./BlogDetails";


const Blog = () => {
   
    const [blog, setBlog] = useState([])

    useEffect( () => {
    
        fetch('blog.json')
        .then( res => res.json())
        .then(data => setBlog(data))

    } , [])


    return (
        <div className=" mt-20 mb-20 ml-20 mr-20">

            <div>

             <div>
             <p className=" text-5xl droFont text-center text-black ">FROM OUR BLOG</p>
             <hr className=" mt-10 "></hr>
             </div>


             
             <div className="  mt-10 ">
                {
                  
                  blog.map( blog => <BlogDetails blog={blog}></BlogDetails> )

                }
             </div>





            </div>
            
        </div>
    );
};

export default Blog;