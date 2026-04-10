import React from 'react'

export default function Navbar() {
  return (
    <div className="nav bg-[#1a1a1a] w-[80%] h-14
    flex flex-row items-center justify-between px-10">
        <h2 className='myName text-[#FFD90F] text-2xl font-bold'>
            Cyprian Kiprop
        </h2>

        <ul className='nav-items flex flex-row items-center justify-center gap-4'>
          <li>Work</li>
          <li>About</li>
          <li>Experience</li>
        </ul>

        <button className='contactBtn flex align-center justify-center text-white 
        font-bold pt-1'>
          Contact
        </button>
    </div>
  )
}
