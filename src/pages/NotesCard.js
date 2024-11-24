import React from "react";
import { LuPin, LuPinOff } from "react-icons/lu";
import { RiDeleteBinFill, RiInboxArchiveFill } from "react-icons/ri";
import { useNotes } from "../context/notes-context";
import { toast } from "react-toastify";

const NotesCard = ({ id, title, text, pinned, archived }) => {
  const { notesDispatch } = useNotes();

  const handlePinToggle = () => {
    notesDispatch({ type: "TOGGLE_PIN", payload: id });
    toast.info(pinned ? "Note unpinned!" : "Note pinned!");
  };

  const handleArchive = () => {
    if (pinned) {
      toast.warn("Please unpin the note before archiving.");
      return;
    }

    if (archived) {
      notesDispatch({ type: "UNARCHIVE_NOTE", payload: id });
      toast.success("Note moved to Home!");
    } else {
      notesDispatch({ type: "ARCHIVE_NOTE", payload: id });
      toast.success("Note archived!");
    }
  };
  const handleDelete = () => {
    if (pinned) {
      toast.warn("Unpin the note before sending to Bin.");
      return;
    }
    notesDispatch({ type: "BIN_NOTE", payload: id });
    toast.error("Note moved to Bin!");
  };

  return (
    <div
      className={`border p-4 rounded-md shadow-md flex flex-col justify-between h-40 ${
        pinned ? "bg-yellow-400" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-lg truncate">{title}</p>
        <button
          onClick={handlePinToggle}
          className="text-gray-500 hover:text-black"
        >
          {pinned ? <LuPin /> : <LuPinOff />}
        </button>
      </div>
      <div className="mb-2">
        <p className="text-sm text-gray-700 line-clamp-3">{text}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleArchive}
          className="text-gray-500 hover:text-black"
        >
          <RiInboxArchiveFill />
        </button>
        <button
          onClick={handleDelete}
          className="text-gray-500 hover:text-black"
        >
          <RiDeleteBinFill />
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
