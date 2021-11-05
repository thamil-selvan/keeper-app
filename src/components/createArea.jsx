import React, { useState } from "react";
function CreateArea(props){
    const [note,setnotes]= useState({
        title:"",
        content:""
    });
    function handleChange(event){
        const {name,value}=event.target;
        setnotes((prevNote)=>{
            return ({
                ...prevNote,
                [name]: value
            });
        });
    }
    function submitNote(event){
        props.onAdd(note);
        setnotes({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note" > 
                <input className="input" type="text" name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
                <textarea name="content" rows="3" onChange={handleChange} value={note.content} placeholder="Take a note.." ></textarea>
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    )
}
export default CreateArea;