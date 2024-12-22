import Swal from "sweetalert2";



function PaymentForm() {


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
                       title: 'Send Done!',
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Payment Form
        </h2>
        <form onSubmit={onSubmit}  className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Name on Card</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div className="flex space-x-4">
          <div className="w-1/2">
          <label className="block text-gray-600 font-medium mb-2">Expiry Date</label>
          <input
           type="text"
           name="expiry"
           placeholder="MM/YY"
           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
           required
           />
           </div>
           <div className="w-1/2">
           <label className="block text-gray-600 font-medium mb-2">CVV</label>
           <input
           type="password"
           name="cvv"
           maxLength="3"
           placeholder="123"
           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
           required
           />
            </div>
          </div>
          <input type="submit"  className=" btn w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors" value="Pay Now" />
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
