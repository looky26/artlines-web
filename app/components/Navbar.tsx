import React from 'react'

const Navbar = () => {
  return (
    <nav className='max-w-[1440px] mx-auto py-5 text-white bg-black'>
        <div className='flex justify-between items-center'>
            <img src="./images/artlineslogo.png" alt="" />
            <ul className='lg:flex justify-between space-x-5 text-[20px] font-semibold hidden'>
            <li>Home</li>
                <li>Rates</li>
                <li>Payment</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className='bg-[#FCC400] h-[38px] rounded-full w-[157px] text-[20px]'>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar