import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTS_API } from '../../Utils/constants';

const VideosComments = ({videosId}) => {
//   const [ comments, setComments ] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const commentsData = await fetch( YOUTUBE_COMMENTS_API + videosId + "&maxResults=100");
    const json = await commentsData.json();
    console.log("hello", json);
    // setComments(json);
  }

  return (
    <>
        <h1>{videosId}</h1>
    </>
  )
}

export default VideosComments