import React from 'react'
import BannerImobile from './Elements/BannerImobile'
import BannerIDesktop from './Elements/BannerIDesktop'
import BannerITablet from './Elements/BannerITablet'
export default function Banner() {
  return (
    <div >
      <div className='w-full  md:hidden lg:hidden xl:hidden'>
        <BannerImobile />
      </div>
      <div className='w-full  hidden md:hidden lg:hideen xl:block'>
        <BannerIDesktop />
      </div>
      <div className='w-full  hidden md:block lg:block xl:hidden'>
        <BannerITablet />
      </div>
     
    </div>
  )
}
