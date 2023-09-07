import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  },[]);

  return (
    <>
      <AddNote />
      <div className="container my-3">
        <h2>Your Notes</h2>
        <div className="row my-2">
          {notes.map((note) => {
            return <Noteitem key = {note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
