import React from 'react'
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"

const HomeContainer = () => {
  return (
    <section id="Home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
      <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
      <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
      <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl '>
        <img src={Delivery} className="w-full h-full object-contain" alt="Delivery"/>
      </div>
    </div>

    <p className='text-[2.5rem] lg:text-[4.75rem] font-bold tracking-wide text-headingColor'>
      The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5.5rem]'>Your City</span>
    </p>

    <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem reprehenderit pariatur quasi placeat aliquid ut error, obcaecati cumque, nihil cum distinctio iure quod iusto dicta nisi molestias laboriosam hic impedit.
    </p>

    <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full
    md:w-auto px-4 py-2 rounded-lg  hover:shadow-lg transition-all ease-in-out duration-100'>
      Order Now
    </button>

  </div>

  <div className='py-2 flex-1 flex items-center'> 
        <img src={HeroBg} className="h-full ml-auto " alt ="hero-bg"/>

        <div className='w-full h-full absolute flex items-center justify-center'>
          <div className='w-190 p-2 '>

          </div>
        </div>
  
  </div>
  </section>
  )
}

export default HomeContainer