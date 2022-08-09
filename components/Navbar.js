import React from 'react'
import Link from 'next/link'
import { useRef } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'

const Navbar = ({cart, addToCart,clearCart,removeToCart, subtotal}) => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.add('translate-x-0')
      ref.current.classList.remove('translate-x-full')

    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')

    }
  }
  const ref = useRef()
  return (
    <div className='flex flex-col justify-center items-center py-2 md:flex-row md:justify-start shadow-2xl sticky top-0 bg-white z-10'>
      <div className="log font-bold mx-8 text-yellow-500">SALMAN</div>
      <div className="nav">
        <ul className='flex space-x-3 font-bold '>
          <Link href={'/tshirst'}><a><li>Tshirts</li></a></Link>
          <Link href={'/watch'}><a><li>Watch</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/shoes'}><a><li>Shoes</li></a></Link>
        </ul>
      </div>
      <div className="cart cursor-pointer absolute right-0 top-3 mx-5 flex">
       <Link href={'/login'}><a><MdAccountCircle className='text-xl md:text-2xl mx-2'/></a></Link>
        <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl' />
      </div>

      <div ref={ref} className=" w-72 h-[100vh] sidebar absolute top-0 right-0 bg-yellow-100 p-10 z-50 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl">Shoping Cart</h2>
        <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-yellow-500"><AiFillCloseCircle /></span>
        <ol className='list-disc text-yellow-700'>
        {Object.keys(cart).length==0 && <div className="my-4 font-semibold">Your Card is Empty</div>}
          {Object.keys(cart).map((k)=>{return<li key={k}>
            <div className='flex my-5'>
              <div>{cart[k].name} </div>
              <div className='flex items-center justify-center mx-2'><AiFillMinusCircle onClick={() => {removeToCart(k,1, cart[k].price,cart[k].name, cart[k].size, cart[k].variant)}} className='m-1 text-lg cursor-pointer text-yellow-500' /> <span className='mx-2 text-50'>{cart[k].qty} </span><AiFillPlusCircle onClick={() => {addToCart(k,1, cart[k].price,cart[k].name, cart[k].size, cart[k].variant)}} className='m-1 text-lg cursor-pointer text-yellow-500' /></div>
            </div>
          </li>})}
        </ol>
        <div className="total font-bold">Subtotal :₹{subtotal}</div>
        <div className="flex">
         <Link href={'/checkout'}><button className="flex mt-5 mr-2 font-semibold text-black bg-yellow-500 py-2 px-3 hover:bg-yellow-500 rounded text-base">CheckOut</button></Link>
          <button onClick={clearCart} className="flex  mt-5 mr-2 font-semibold text-black bg-yellow-500 py-2 px-3 hover:bg-yellow-500 rounded text-base">Clear Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar 