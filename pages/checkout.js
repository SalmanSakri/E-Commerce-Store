import React from 'react'
import Link from 'next/link'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const checkout = ({ cart, subtotal, addToCart, removeToCart }) => {
  return (
    <div className='container m-auto'>
      <h1 className="font-semibold text-3x1 my-8 text-center"> CheckOut</h1>
      <h2>Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="email" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className=" relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="px-2 w-full">
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea type="address" id="address" name="address" cols='30' rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>

      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="relative mb-4">
            <label htmlFor="Phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="Phone" id="Phone" name="Phone" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className="px-2 w-1/2">
          <div className=" relative mb-4">
            <label htmlFor="City" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="City" name="City" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className=" relative mb-4">
            <label htmlFor="State" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="State" name="State" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>


        <div className="px-2 w-1/2">
          <div className=" relative mb-4">
            <label htmlFor="Pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="text" id="Pincode" name="Pincode" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>



      <h2 className="font-semibold text-3x1 my-8 text-center"> Review Cart Iteam</h2>
      <div className=" sidebar bg-yellow-100 p-10 z-50">

        <ol className='list-disc text-yellow-700'>
          {Object.keys(cart).length == 0 && <div className="my-4 font-semibold">Your Card is Empty</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='flex my-5'>
                <div>{cart[k].name} </div>
                <div className='flex items-center justify-center mx-2'><AiFillMinusCircle onClick={() => { removeToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='m-1 text-lg cursor-pointer text-yellow-500' /> <span className='mx-2 text-50'>{cart[k].qty} </span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='m-1 text-lg cursor-pointer text-yellow-500' /></div>
              </div>
            </li>
          })}
        </ol>
        <span className="total font-bold">Subtotal :₹{subtotal}</span>
      </div>

      <div className="mx-4">
      <Link href={'/checkout'}><button className="flex mt-5 mr-2 font-semibold text-black bg-yellow-500 py-2 px-3 hover:bg-yellow-500 rounded text-lg">Pay :₹{subtotal}</button></Link>
      </div>





    </div>
  )
}

export default checkout