import React, { useState }from 'react';



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Upercase was clicked => " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick = () =>{
        console.log("LowerClick was clicked => " + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const clear = () =>{
        console.log("Clear was clicked => " + text);
        let newtext = "";
        setText(newtext);
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return(
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3 my-2" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-3 my-2" onClick={handleLoClick}> Convert to LowerCase</button>
                <button className="btn btn-primary mx-3 my-2" onClick={clear}> Clear</button>
            </div>
            <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1> Your Text Summary</h1>
            <p> total words are {text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} characters </p>
            <h2> Prewiew</h2>
            <p>{text.length>0 ? text:"Enter something to preview"}</p>
            </div>
        </>
    )
}