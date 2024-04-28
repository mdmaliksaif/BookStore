import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Meet = () => {
  return (
    <>
    <Navbar/>
     <div className='md:flex   md:p-44 mt-20'>
        {/* left */}
        <div className='md:w-1/2 p-4'><img src="https://www.shutterstock.com/image-photo/smiling-african-american-customer-care-600nw-2237515137.jpg" alt="" /></div>
        {/* right */}
        <div className='md:w-1/2 p-4 relative'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex items-center">
        <label htmlFor="firstName" className="mr-2 block text-sm font-medium text-white">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="w-full px-3 py-2 rounded-md border-2 bg-transparent text-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="lastName" className="mr-2 block text-sm font-medium text-white">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="w-full px-3 py-2 rounded-md border-2 bg-transparent  text-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="col-span-full">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 rounded-md border-2 bg-transparent text-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="col-span-full">
        <label htmlFor="feedback" className="block text-sm font-medium text-white">
          Leave few Words:
        </label>
        <textarea
          id="feedback"
          name="feedback"
          className="w-full h-36 px-3 py-2 rounded-md border-2 bg-transparent text-white border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className='bg-red-500 px-4 py-2 text-black rounded-md'>Submit</button>
      </div>
    </div>
        </div>
   </div>
   <Footer/>
    </>
  )
}

export default Meet