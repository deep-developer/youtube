import React, { useEffect } from 'react';
import { MdDensityMedium, MdPerson } from "react-icons/md";
import  Logo  from "../../Assets/Images/youtube-logo.png"
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../Utils/Slices/MenuDrawerSlice';
import { useState } from 'react';
import { YOUTUBE_SUGGESTIONS_API } from '../../Utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout( () => getSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch( YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  }
  
  // passing action for menu toggling
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu);
  }


  return (
    <>
      <div className='grid grid-flow-col px-3 py-5'>
        <div className=' col-span-1 flex justify-center items-center'>
          <MdDensityMedium className=' text-2xl cursor-pointer' onClick={toggleMenuHandler} />
          <img src={Logo} className=' w-28 pl-5' alt="logo" />
        </div>

        <div className=' col-span-10 grid grid-flow-col'>
          <div className='col-span-2'></div>
          <div className='col-span-8 grid grid-flow-col relative'>
            <div className='col-span-12 grid grid-flow-col'>
              <input type="text" className='col-span-10 py-2 rounded-l-full border-[1px] border-gray-300 focus:border-[1px] focus:border-gray-300 focus:outline-none pl-5 ' 
              value={searchQuery} 
              onChange={(e) => {setSearchQuery(e.target.value)}} 
              onFocus={() =>  setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              />
              <button className='col-span-1 py-2 bg-gray-100 rounded-r-full border-[1px] border-gray-500'>Search</button>
              <button className='col-span-1'>Mike</button>
            </div>
            {
              showSuggestions && (
                <div className='absolute w-[80%] top-16 shadow-md rounded-md bg-white'>
                  <ul> 
                    {
                      suggestions.map((searchItem) => {
                       return ( 
                         <li className='hover:bg-gray-200 py-2 px-5 w-full'>{searchItem}</li>
                       )
                      })
                    }
                  </ul>
                </div>
              )
            }
          </div>
          <div className='col-span-2'></div>
        </div>

        <div className=' col-span-1'>
          <MdPerson className=' text-2xl' />
        </div>
      </div>
    </>
  )
}

export default Header