// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Archive from "./components/Archive";
// import Important from "./components/Important";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import Bin from "./components/Bin";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <main className="flex gap-2 overflow-hidden">
//         <Sidebar />
//         <div className="flex-1 max-w-full overflow-auto">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/important" element={<Important />} />
//             <Route path="/archive" element={<Archive />} />
//             <Route path="/bin" element={<Bin />} />
//           </Routes>
//         </div>
//       </main>
//       <ToastContainer position="top-right" autoClose={3000} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./components/Archive";
import Important from "./components/Important";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Bin from "./components/Bin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <div className="min-h-screen ">
      <Navbar onToggleSidebar={toggleSidebar} />
      
      <main className="flex gap-2 overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} className="relative z-20"
      />
        <div className="flex-1 max-w-full overflow-auto" onClick={closeSidebar}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/important" element={<Important />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/bin" element={<Bin />} />
          </Routes>
        </div>
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
