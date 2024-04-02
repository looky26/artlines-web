import React from 'react'

const Banner = () => {
    return (
        <div className="max-w-[1440px] mx-auto bg-[url('/images/bg-1.png')] bg-cover bg-center ">
            <div className='max-w-7xl mx-auto flex flex-col text-center lg:text-start lg:flex-row justify-center lg:justify-around pt-10 items-center'>
                <div className='space-y-5'>
                    <h1 className='text-[70px] font-bold'>Need a <br />
                        Website?</h1>
                    <p className='text-[25px]'>We Create Affordable Websites That Have Big <br />
                        Impact for Small Businesses and Startups.</p>
                    <button className='bg-[#FCC400] rounded-full px-7 py-1 text-[20px]'>Select Plan</button>
                </div>
                <div className='object-contain mt-10'>
                    <img src="./images/bannerlogo.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner