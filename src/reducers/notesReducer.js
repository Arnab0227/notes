import { v4 as uuid } from "uuid";
export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: uuid(),
            title: state.title,
            text: state.text,
            pinned: false,
            archived: false,
          },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        title: "",
        text: "",
      };
    case "TOGGLE_PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload
            ? {
                ...note,
                pinned: !note.pinned,
                archived: note.pinned ? note.archived : false,
              }
            : note
        ),
      };
    case "ARCHIVE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload && !note.pinned
            ? { ...note, archived: true }
            : note
        ),
      };
    case "UNARCHIVE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload ? { ...note, archived: false } : note
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
      };
    case "BIN_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload && !note.pinned
            ? { ...note, archived: false, isInBin: true }
            : note
        ),
      };

    case "RESTORE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload ? { ...note, isInBin: false } : note
        ),
      };

    case "DELETE_ALL_BIN":
      return {
        ...state,
        notes: state.notes.filter((note) => !note.isInBin),
      };

    case "RESTORE_ALL_BIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.isInBin ? { ...note, isInBin: false } : note
        ),
      };

    default:
      return state;
  }
};
