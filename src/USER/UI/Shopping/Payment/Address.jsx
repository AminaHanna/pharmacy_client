import React from 'react'
import { Link } from 'react-router-dom'

function Address() {
  return (
    <>
     <div className="min-h-screen m-5 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-semibold mb-4 text-pink-900 border-b-2">Deliver to this Address</h2>

          <form>
            <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>

            {/* Shipping Form */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Contact
              </label>
              <input
                type="text"
                id="phNumber"
                name="phNumber"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pinCode"
                className="block text-sm font-medium text-gray-600"
              >
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </form>

          <Link to={'/payment'}><button type="submit" className="bg-pink-800 text-white p-2 rounded-md hover:bg-pink-600">
            SHIP TO THIS ADDRESS <i class="fa-solid fa-arrow-right"></i>
          </button></Link>

        </div>
    </div>
    </>
  )
}

export default Address
