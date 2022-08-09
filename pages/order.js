import React from 'react'
import Image from 'next/image'

const order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Online.com</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Oder ID: #1111111</h1>
        <p className="leading-relaxed mb-4">Your Oder has been Successfully placed.</p>
        <div className="flex mb-4">
          <a className="flex-grow text-yellow-500 border-b-2 border-yellow-500 py-2 text-lg px-1"> Iteam Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Iteam Total</a>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Tshrit</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹399</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Watch</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹399</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Shoes</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹399</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">SubTotal: ₹399</span>
          <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Track Order</button>
          
        </div>
      </div>
      {/* <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/shoes.js" width={400} height={400}/> */}
      <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/shoes.jpg" width={400} height={400} />
    </div>
  </div>
</section>
    </div>
  )
}

export default order
