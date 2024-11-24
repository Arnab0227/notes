// import React from "react";
// import NotesCard from "./NotesCard";
// import { useNotes } from "../context/notes-context";

// const Home = () => {
//   const { title, text, notes, notesDispatch } = useNotes();
//   const homeNotes = notes.filter((note) => !note.archived && !note.isInBin);


//   const handleTitleChange = (e) => {
//     notesDispatch({ type: "TITLE", payload: e.target.value });
//   };

//   const handleTextChange = (e) => {
//     notesDispatch({ type: "TEXT", payload: e.target.value });
//   };

//   const handleAddClick = () => {
//     notesDispatch({ type: "ADD_NOTE" });
//     notesDispatch({ type: "CLEAR_INPUT" });
//   };

//   return (
//     <div>
//       <main className="flex gap-2">
//         <div className="flex flex-col gap-4 w-full">
//           <div className="w-full flex justify-center items-center border-b-2">
//             <div className="w-full max-w-sm flex flex-col items-center">
//               <div className="text-xl font-semibold pt-3 pb-3">Add a Note</div>
//               <div className="w-full">
//                 <input
//                   type="text"
//                   placeholder="Enter the title"
//                   onChange={handleTitleChange}
//                   value={title}
//                   className="focus:outline-none focus:shadow-lg w-full h-12 px-3 text-left border rounded-md shadow-md"
//                 />
//                 <textarea
//                   placeholder="Enter the description"
//                   onChange={handleTextChange}
//                   value={text}
//                   className="focus:outline-none focus:shadow-lg w-full h-36 px-3 py-2 text-left border rounded-md shadow-md resize-none mt-3"
//                 />
//               </div>
//               <div className="pb-3 w-full">
//                 <button
//                   disabled={title.length === 0}
//                   onClick={handleAddClick}
//                   className="mt-3 w-full h-12 rounded-full bg-yellow-400 hover:bg-black hover:shadow-lg hover:text-white shadow-md"
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="text-xl font-semibold flex justify-center w-full">Notes</div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 pt-0">
//             {homeNotes?.length > 0 &&
//               homeNotes.filter(note => !note.archived).map(({ id, title, text, pinned }) => (
//                 <NotesCard
//                   key={id}
//                   id={id}
//                   title={title}
//                   text={text}
//                   pinned={pinned}
//                   archived={false}
//                 />
//               ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import NotesCard from "./NotesCard";
import { useNotes } from "../context/notes-context";

const Home = () => {
  const { title, text, notes, notesDispatch } = useNotes();
  const homeNotes = notes.filter((note) => !note.archived && !note.isInBin);

  const handleTitleChange = (e) => {
    notesDispatch({ type: "TITLE", payload: e.target.value });
  };

  const handleTextChange = (e) => {
    notesDispatch({ type: "TEXT", payload: e.target.value });
  };

  const handleAddClick = () => {
    notesDispatch({ type: "ADD_NOTE" });
    notesDispatch({ type: "CLEAR_INPUT" });
  };

  return (
    <div>
      <main className="flex gap-2">
        <div className="flex flex-col gap-4 w-full">
          <div className="w-full flex justify-center items-center border-b-2">
            <div className="w-full max-w-sm flex flex-col items-center">
              <div className="text-xl font-semibold pt-3 pb-3">Add a Note</div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter the title"
                  onChange={handleTitleChange}
                  value={title}
                  className="focus:outline-none focus:shadow-lg w-full h-12 px-3 text-left border rounded-md shadow-md"
                />
                <textarea
                  placeholder="Enter the description"
                  onChange={handleTextChange}
                  value={text}
                  className="focus:outline-none focus:shadow-lg w-full h-36 px-3 py-2 text-left border rounded-md shadow-md resize-none mt-3"
                />
              </div>
              <div className="pb-3 w-full">
                <button
                  disabled={title.length === 0}
                  onClick={handleAddClick}
                  className="mt-3 w-full h-12 rounded-full bg-yellow-400 hover:bg-black hover:shadow-lg hover:text-white shadow-md"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="text-xl font-semibold flex justify-center w-full">Notes</div>
          <div className="grid grid-cols-1 gap-4 p-4 pt-0 md:grid-cols-2 lg:grid-cols-4">
            {homeNotes.length > 0 &&
              homeNotes.map(({ id, title, text, pinned }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  pinned={pinned}
                  archived={false}
                  className="w-full" 
                />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;