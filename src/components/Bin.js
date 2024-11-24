import React from "react";
import { useNotes } from "../context/notes-context";
import { toast } from "react-toastify";

const Bin = () => {
  const { notes, notesDispatch } = useNotes();
  const binNotes = notes.filter((note) => note.isInBin);

  const handleDeleteAll = () => {
    notesDispatch({ type: "DELETE_ALL_BIN" });
    toast.error("All notes deleted permanently!");
  };

  const handleRestoreAll = () => {
    notesDispatch({ type: "RESTORE_ALL_BIN" });
    toast.success("All notes restored!");
  };

  const handleRestoreNote = (id) => {
    notesDispatch({ type: "RESTORE_NOTE", payload: id });
    toast.success("Note restored!");
  };

  const handleDeleteNote = (id) => {
    const note = notes.find((n) => n.id === id);
    if (note.pinned) {
      toast.warn("Cannot delete Important notes!");
      return;
    }
    notesDispatch({ type: "DELETE_NOTE", payload: id });
    toast.error("Note deleted permanently!");
  };

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Bin</h1>
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={handleRestoreAll}
          className="bg-yellow-400 hover:bg-yellow-500 shadow-md px-4 py-2 rounded-lg"
        >
          Restore All
        </button>
        <button
          onClick={handleDeleteAll}
          className="bg-black shadow-md hover:bg-slate-700 text-white px-4 py-2 rounded-lg"
        >
          Delete All
        </button>
      </div>
      {binNotes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {binNotes.map(({ id, title, text }) => (
            <div
              key={id}
              className="border p-4 rounded-md shadow-md flex flex-col justify-between h-40 bg-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-lg truncate">{title}</p>
              </div>
              <div className="mb-2">
                <p className="text-sm text-gray-700 line-clamp-3">{text}</p>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => handleRestoreNote(id)}
                  className="text-gray-500 hover:text-black"
                >
                  Restore
                </button>
                <button
                  onClick={() => handleDeleteNote(id)}
                  className="text-gray-500 hover:text-black"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-4">
          Your bin is empty!
        </p>
      )}
    </div>
  );
};

export default Bin;
