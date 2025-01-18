import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import CreateNotes from "./components/CreateNotes.tsx";
import { Box } from "@mui/material";
import Notes from "./components/Notes.tsx";
import { NoteObject } from "./models/note.ts";

function App() {
const [notes, setNotes]=useState<NoteObject[]>([]);

useEffect(()=>{
  if(sessionStorage.getItem('notes')){
    setNotes(JSON.parse(sessionStorage.getItem('notes') as string))
  }
},[])

const addNotes=(note:NoteObject)=>{
  setNotes([note, ...notes]);
  sessionStorage.setItem('notes', JSON.stringify([note, ...notes]))
}

const deleteNote=(id:number)=>{
  const updatedNotes = notes.filter(note=>note.id!==id);
  setNotes(updatedNotes)
  sessionStorage.setItem('notes', JSON.stringify(updatedNotes))
}

console.log("Notes", notes)

  return (
    <>
    <Header />
    <Box style={{padding:20}}>
    <CreateNotes addNotes={addNotes}/>
    <Notes notes={notes} deleteNote={deleteNote}/>
    </Box>
    </>
  
  )
}

export default App;
