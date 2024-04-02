import React from 'react'

const FrequentlyAskQuestions = () => {
    return (
        <div className='max-w-[1440px] mx-auto relative bg-[#161312]'>
            <div className='flex justify-between items-center pt-12 mt-20 relative'>
                <img src="./images/polygon1.svg" alt="" className='z-20 h-11 lg:h-full' />
                <img src="./images/dots.svg" alt="" className='z-20 h-9 lg:h-full object-contain' />
                <img src="./images/leftimage2.png" alt="" className='absolute top-0 z-10' />
                <img src="./images/rightimage2.png" alt="" className='absolute top-0 right-0 z-10' />

            </div>
            <div className='flex lg:justify-around px-[40px] lg:flex-row  text-center lg:text-left flex-col relative items-center lg:items-start  z-30'>
                <div className='space-y-5'>
                    <h1 className='lg:text-[50px] text-[30px] font-bold'>Frequently <br />
                        Ask Questions</h1>
                    <p className='lg:text-[25px]'>Gain a deeper understanding of our services, <br /> processes, and policies</p>
                    <button className='bg-[#FCC400] px-7 py-1 rounded-full text-[20px]'>Click here</button>
                </div>
                <div>
                    <img className='lg:h-full h-72' src="./images/man.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAskQuestions