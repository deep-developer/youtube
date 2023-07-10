import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../../../Utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [ videos, setVideos] = useState([])

  useEffect(() => {
    getYoutubeData();
  }, []);

  const getYoutubeData = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <>
      <div className='grid grid-cols-3'>
        {
            videos.map(video => 
                <Link to={'/watch?v=' + video.id}>
                  <VideoCard key={video.id} info={video} />
                </Link>
            )
        }
      </div>
    </>
  )
}

export default VideoContainer