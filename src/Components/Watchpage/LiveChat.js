import React, { useEffect, useState } from 'react'
import ChatMassages from './ChatMassages'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../../Utils/Slices/chatSlice';
import { randomImage } from '../../Utils/helper';

const LiveChat = () => {
  const [ userMessage, setUserMessage ] = useState("");

  const dispatch = useDispatch();

  const chatDetails = useSelector( (store) => store.chat.messsages );

  useEffect(() => {
    const apiData = setInterval( () => {
        console.log("api calling")

        dispatch(addMessages({
            "image": randomImage,
            "name": "Deep Dey",
            "message": "Hello there! it's a dummy message"
        }))
    }, 5000);

    return () => clearInterval(apiData);
  },[]);

  return (
    <>
        <div className=' border-[1px] border-gray-400 p-2 w-full rounded-lg h-[360px] overflow-y-auto flex flex-col-reverse'>
            {
                chatDetails.map((chatItems, index) => <ChatMassages key={index} name={chatItems.name} message={chatItems.message} image={chatItems.image} />)
            }
        </div>
        <div className='w-full border border-gray-300 rounded-lg flex justify-between'>
            <form 
            onSubmit={(e) => { 
                e.preventDefault();
                dispatch(addMessages({
                    "name": "Dummy",
                    "message": userMessage
                }))
             }}>
                <input type="text" placeholder='Add your comments' value={ userMessage } onChange={(e) => { setUserMessage(e.target.value) }} className='py-1 px-2 focus:outline-none w-[70%] text-base'/>
            </form>
            <button className='rounded-lg bg-slate-700 text-white py-1 px-3 ml-2 w-[20%] text-base'>Add Comments</button>
        </div>
    </>
  )
}

export default LiveChat