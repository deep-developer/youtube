import React from 'react'
import MenuItems from './MenuItems'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector( (store) => store.menuDrawer.isMenuOpen);

  // this type of coding pattern known as early return
  if(!isMenuOpen) return null;

  return (
    <>
        <div className='col-span-2 border-[1px] border-gray-200'>
          <MenuItems/>
        </div>
    </>
  )
}

export default Sidebar