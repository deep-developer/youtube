import React from 'react'

const VideoCard = ({info}) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  return (
    <>
      <div className='py-2 px-3 col-span-1'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail"/>
        <ul>
          <li className='font-bold'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
      </div>
    </>
  )
}

export default VideoCard