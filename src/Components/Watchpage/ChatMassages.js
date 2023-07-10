import React from 'react'

const ChatMassages = ({name, message, image}) => {
  return (
    <>
        <div className='flex mr-4'>
            <img className='w-[32px] h-[32px] rounded-full' src={image} alt="chatuser" />
            <span className=' text-gray-500 text-base'>{name}</span>
            <span className=' text-sm'>{message}</span>
        </div>
    </>
  )
}

export default ChatMassages