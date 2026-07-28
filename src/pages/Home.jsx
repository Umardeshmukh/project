import React from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomebottumText from '../components/home/HomebottumText'

const Home = () => {
  return (
    <div>
      <div className=' h-screen w-screen fixed flex-col'>
          <Video/>

      </div>
      <div className='h-screen w-screen relative flex-col align-'>
        <HomeHeroText/>
        <HomebottumText/>

      </div>
    </div>
  )
}

export default Home