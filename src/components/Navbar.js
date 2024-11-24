// import React from 'react'
// import { BiNotepad } from "react-icons/bi";
// const Navbar = () => {
//   return (
//     <div className='bg-black h-16 w-screen flex items-center rounded-b-xl border-b-2 border-white'>
//     <div className='ml-5 bg-gradient-to-t from-yellow-500 to-yellow-400 w-auto h-12 p-5 flex items-center gap-2 rounded-full'>
//       <span className='text-2xl'><BiNotepad /></span>
//       <span className='text-2xl'>Notes App</span>
//     </div>
//     </div>
//   )
// }

// export default Navbar

import React from "react";
import { BiNotepad } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="bg-black h-16 w-screen flex items-center justify-between rounded-b-xl border-b-2 border-white">
      <div className="ml-5 bg-gradient-to-t from-yellow-500 to-yellow-400 w-auto h-12 p-5 flex items-center gap-2 rounded-full">
        <span className="text-2xl">
          <BiNotepad />
        </span>
        <span className="text-2xl">Notes App</span>
      </div>
      <button onClick={onToggleSidebar} className="mr-5 md:hidden">
        <GiHamburgerMenu className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default Navbar;
