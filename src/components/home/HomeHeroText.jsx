import React from 'react'
import Video from './video'

const HomeHeroText = () => {
  return (
    <div className='font[font1] pt-5 text-center'>
    <div className='text-[8.5vw] uppercase leading-[10vw] justify-center flex items-center'>The spark</div>
    <div className='text-[8.5vw] uppercase leading-[10vw] justify-center flex items-center'>Who
             <div className='h-[7.5vw] w-[16vw] rounded-full overflow-hidden '>
               <Video/>
               </div>generates</div>
    <div className='text-[8.5vw] uppercase leading-[10vw] justify-center flex items-center'>there </div>
    <div className='text-[8.5vw] uppercase leading-[10vw] justify-center flex items-center'>creativity</div>
     </div>
  ) 
}

export default HomeHeroText