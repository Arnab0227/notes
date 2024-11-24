import React from "react";
import NotesCard from "../pages/NotesCard";
import { useNotes } from "../context/notes-context";

const Important = () => {
  const { notes } = useNotes();
  const pinnedNotes = notes.filter((note) => note.pinned && !note.archived);

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Important Notes</h1>
      {pinnedNotes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pinnedNotes.map((note) => (
            <NotesCard key={note.id} {...note} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-4">
          You have no Important notes!
        </p>
      )}
    </div>
  );
};

export default Important;
