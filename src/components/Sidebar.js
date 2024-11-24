// import React from "react";
// import { NavLink } from "react-router-dom";
// import { RiDeleteBinFill } from "react-icons/ri";
// import { MdLabelImportant } from "react-icons/md";
// import { RiInboxArchiveFill } from "react-icons/ri";
// import { HiHome } from "react-icons/hi2";
// const Sidebar = () => {
//   const getStyles = ({isActive}) => {
//     const styles = 'flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full mt-2 pt-2 pb-2'
//     return isActive ? ` bg-yellow-400 ${styles}` : `hover:bg-black hover:text-white ${styles}`
//   }
//   return (
//     <aside className="w-[250px] h-screen border-r-2 pr-2">
//       <NavLink to="/" className={getStyles}>
//         <span>
//           <HiHome />
//         </span>
//         <span>Home</span>
//       </NavLink>
//       <NavLink to="/archive" className={getStyles}>
//         <span>
//           <RiInboxArchiveFill />
//         </span>
//         <span>Archive</span>
//       </NavLink>
//       <NavLink to="/important" className={getStyles}>
//         <span>
//           <MdLabelImportant />
//         </span>
//         <span>Important</span>
//       </NavLink>
//       <NavLink to={"/bin"} className={getStyles}>
//         <span>
//           <RiDeleteBinFill />
//         </span>
//         <span>Bin</span>
//       </NavLink>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdLabelImportant } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { HiHome } from "react-icons/hi2";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const getStyles = ({ isActive }) => {
    const baseStyles =
      "flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full mt-2 pt-2 pb-2";
    return isActive
      ? `bg-yellow-400 ${baseStyles}`
      : `hover:bg-black hover:text-white ${baseStyles}`;
  };

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 w-64 md:w-44 lg:w-64 h-screen border-r-2 pr-2 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <NavLink to="/" className={getStyles} onClick={onClose}>
        <HiHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/archive" className={getStyles} onClick={onClose}>
        <RiInboxArchiveFill />
        <span>Archive</span>
      </NavLink>
      <NavLink to="/important" className={getStyles} onClick={onClose}>
        <MdLabelImportant />
        <span>Important</span>
      </NavLink>
      <NavLink to="/bin" className={getStyles} onClick={onClose}>
        <RiDeleteBinFill />
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;


