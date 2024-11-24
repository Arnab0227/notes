import React from "react";
import NotesCard from "../pages/NotesCard";
import { useNotes } from "../context/notes-context";

const Archive = () => {
  const { notes } = useNotes();
  const archivedNotes = notes.filter((note) => note.archived && !note.isInBin);



  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Archived Notes</h1>
      {archivedNotes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 opacity-60">
          {archivedNotes.map((note) => (
            <NotesCard key={note.id} {...note} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-4">
          You have no archived notes!
        </p>
      )}
    </div>
  );
};

export default Archive;
