import React from 'react'
import Image from 'next/image'
const hoodies = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="lg:w-1/5 md:w-1/2 p-4 cursor-pointer shadow-xl m-2">
              <a className=" relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className=" md:m-0 object-cover" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1"></p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 cursor-pointer shadow-xl">
              <a className="block relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover  cursor-pointer shadow-xl h-full" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 text-center md:text-left ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">₹399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-xl m-2">
              <a className="block relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center cursor-pointer shadow-xl h-full block" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">₹399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-xl m-2">
              <a className="block relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center cursor-pointer shadow-xl h-full block" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 md:text-left text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">₹399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-xl m-2">
              <a className="block relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center cursor-pointer shadow-xl h-full block" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">₹399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-xl">
              <a className="block relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center cursor-pointer shadow-xl h-full block" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mt-1">₹399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-xl">
              <a className="block relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center cursor-pointer shadow-xl h-full block" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">₹399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 cursor-pointer shadow-xl">
              <a className="block relative h-36 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center cursor-pointer shadow-xl h-full block" src="/hoodies.jpg" width={180} height={150} />
              </a>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">₹399</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default hoodies