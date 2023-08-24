import React from 'react';
import NoteContext from './NoteContext';
import { useState } from 'react';
// yaha se ham state ko call lagayenge aur bhejenge jis component me need hogi hame 

// agar yaha ham koi funcion bhi export karte hai to usko bhi ham use kar sakte hai skill to update karne ke lea
const NoteState = (props) =>{
    const s1 = {
        "name": "Aditya",
        "class": "B.Tech"
    }
    const [state, setState] = useState(s1)
    const update = () =>{
        setTimeout(()=>{
            setState({"name": "Singh", "class": "Passout",})
        }, 1000);
    }
    return(
        // single curly braces me pass nahi kiaya kyu ki javascript objec thai ye islea hame ye duble me pass karna pada
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;