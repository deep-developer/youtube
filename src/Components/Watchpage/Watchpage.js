import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import VideosComments from './VideosComments';
import LiveChat from './LiveChat';

const Watchpage = () => {
// const dispatch = useDispatch();
// useEffect(() => {
//     dispatch(closeMenu);
// },[]);

const [searchParams] = useSearchParams();

  return (
    <>
        <div className='col-span-10 grid grid-flow-col w-full'>
            <div className="videoContainer col-span-10 flex flex-col">
                <div className='w-full flex gap-8'>
                    <div className=' w-2/3'>
                        <iframe className='w-full' height="360" src={"https://www.youtube.com/embed/" + searchParams.get("v") } title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='w-1/3'>
                        <LiveChat />
                    </div>
                </div>
                <div>
                    <VideosComments videosId={searchParams.get("v")} />
                </div>
            </div>
            <div className="recommendedVideoContainer col-span-2"></div>
        </div>
    </>
  )
}

export default Watchpage