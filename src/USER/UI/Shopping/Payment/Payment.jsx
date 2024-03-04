import React from "react";

function Payment() {
  return (
    <>
     
          {/* payment */}

          <div className="m-10 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
              
                  <p className="text-3xl font-semibold mb-2">
                    Payment Method
                  </p>

                  <div className="my-10 border-b-2 py-5">
                    <div className="flex justify-between">
                      <p className="font-semibold">Order Summary</p>
                      <p className="font-bold">sub total</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-slate-500">Shopping Bag Value</p>
                      <p className="font-bold">total amt</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-slate-500">Shipping Charges</p>
                      <p className="font-bold">shipping charge</p>
                    </div>
                  </div>


                  <form>
                  <div className="mt-5">
                    <p className="mb-3">Choose a payment Method</p>
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      className="mr-2"
                    />
                    <label htmlFor="creditCard" className="text-sm">
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      className="mr-2"
                    />
                    <label htmlFor="cashOnDelivery" className="text-sm">
                      Cash on Delivery
                    </label>
                  </div>
                  </form>
              
                  <button type="submit" className="bg-pink-800 text-white p-2 my-10 mx-16 rounded-md hover:bg-pink-600 w-40">
                    PAY <i class="fa-solid fa-indian-rupee-sign"></i> amt
                  </button>

            </div>
          </div>
          
       
    </>
  );
}

export default Payment;
