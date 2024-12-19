import Swal from "sweetalert2";



const Sign = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: 'Subscribed!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          setResult(data.message);
        }
      };


    return (
        <div className=" mt-20 mb-10 ml-10 mr-10 ">

            <hr className=" mb-20 "></hr>
            <div>
            <p className=" text-center text-2xl droFont text-gray-500 ">our news</p>
            <p className=" text-4xl droFont text-center mt-5 ">SIGN UP FOR LATEST NEWS</p>
            <div className=" flex justify-center">
            <form onSubmit={onSubmit} >
            <div>
            <div class="dark:bg-gray-800 w-full  flex justify-center items-center">
            <div class="max-w-xl mx-auto p-6">
            <label for="input-9" class="block text-sm font-medium text-gray-700 dark:text-gray-100">Email</label>
            <div class="flex items-center mt-1">
            <input type="email" id="input-9" name="Email For Subscribe" required class="w-[380px] h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-gray-400 focus:outline-none rounded shadow-sm" placeholder="user@mail.com"/>
            <input class=" cursor-pointer h-10 px-4 text-sm bg-cyan-400 border border-l-0 border-gray-400 rounded-r shadow-sm text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none" type="submit" value="Subscribe" />
            </div>
            </div>
            </div>
            </div>
            </form>
            </div>
            </div>
            <hr className=" mt-20 "></hr>
            
        </div>
    );
};

export default Sign;