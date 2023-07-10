import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonsList from './ButtonsList'

const MainContainer = () => {
  return (
    <>
      <div className='col-span-10'>
        <ButtonsList />
        <VideoContainer />
      </div>
    </>
  )
}

export default MainContainer