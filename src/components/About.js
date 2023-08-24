import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

export const About = () => {
  const a = useContext(NoteContext)
  useEffect(()=>{
    a.update();
  })
  return (
    <div>
      <h1> This is About {a.state.name} and he study in class {a.state.class}</h1>
    </div>
  )
}

export default About
