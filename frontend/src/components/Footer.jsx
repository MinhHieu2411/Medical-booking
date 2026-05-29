import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'> {/*  md:mt-40 border-t border-t-gray-400 */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* -------- Left -------- */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, placeat dignissimos eos perferendis voluptas soluta illum error, iste quidem quod, at delectus labore ut itaque laborum. Eligendi adipisci harum quod?</p>
        </div>

        {/* -------- Center -------- */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* -------- Right -------- */}
        <div>
          <p className='text-xl font-medium mb-5'>CONNECT WITH US</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>036 3636 3636</li>
            <li>36hospital@thanhhoa.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* -----------Copyright ----------- */}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2036@ 36Hospital - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer