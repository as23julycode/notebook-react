import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/NoteContext";


export const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title:"", description:"", tag:""})

    const NOTEADD = (e) => {
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title:"", description:"", tag:""})
    }

    const onChange = (e) => {
      setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} placeholder="Title"/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" onChange={onChange} name="description" value={note.description} placeholder="Description"/>
          </div>
          <div className="form-group">
            <label htmlFor="tag">Tag</label>
            <input type="text" className="form-control" id="tag" onChange={onChange} name="tag" value={note.tag} placeholder="Tag"/>
          </div>
          <div className="d-flex justify-content-center ">
            <button type="submit" className="btn bg-primary shadow-lg p-3 mb-3 rounded" onClick={NOTEADD}>Add Note</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default AddNote
