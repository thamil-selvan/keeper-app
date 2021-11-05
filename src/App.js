import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/createArea";
import '../src/styles.css';
function App(){
  const [notes,setnotes] =useState([]);
  function addNote(newNote){
    setnotes((prevNotes)=>{
      return [...prevNotes,newNote]
    });
  }
  return (
    <div>
       <Header></Header>
       <CreateArea onAdd={addNote} />

       {notes.map((noteItem,index)=>{
         return(
          <Note key={1} id={index} title={noteItem.title} content={noteItem.content}  />
         )
       })}
       
       <Footer />
    </div> 
  );
}
export default App;