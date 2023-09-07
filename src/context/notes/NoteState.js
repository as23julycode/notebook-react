import React from "react";
import NoteContext from "./NoteContext";
import { useState } from "react";
// yaha se ham state ko call lagayenge aur bhejenge jis component me need hogi hame

// agar yaha ham koi funcion bhi export karte hai to usko bhi ham use kar sakte hai skill to update karne ke lea
const NoteState = (props) => {

  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);

  // GET ALL NOTES
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZWYyNzdjODgyOGFiYzI3MDU1ZTMyIn0sImlhdCI6MTY5MzM4MTMxNX0.1R4JtdQu8vtwBZVcye7bsj8ttNnRkfy6xc7g2MPqxlU"
      }
    });
    const json = await response.json() 
    setNotes(json)
  }

  // Add Notes
  const addNote = async (title, description, tag) => {
    // API CALL karne ka logic
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZWYyNzdjODgyOGFiYzI3MDU1ZTMyIn0sImlhdCI6MTY5MzM4MTMxNX0.1R4JtdQu8vtwBZVcye7bsj8ttNnRkfy6xc7g2MPqxlU",
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete Notes
  const deleteNote = async(id) => {
    // API CALL karne ka logic
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZWYyNzdjODgyOGFiYzI3MDU1ZTMyIn0sImlhdCI6MTY5MzM4MTMxNX0.1R4JtdQu8vtwBZVcye7bsj8ttNnRkfy6xc7g2MPqxlU",
      }
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting a note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit notes\
  const editNote = async (id, title, description, tag) => {
    // API CALL karne ka logic
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZWYyNzdjODgyOGFiYzI3MDU1ZTMyIn0sImlhdCI6MTY5MzM4MTMxNX0.1R4JtdQu8vtwBZVcye7bsj8ttNnRkfy6xc7g2MPqxlU",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // clint side me edit karne ke lea logic
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    // single curly braces me pass nahi kiaya kyu ki javascript objec thai ye islea hame ye duble me pass karna pada
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
