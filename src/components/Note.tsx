import React from "react"
import { NoteObject } from "../models/note"
import { Box, Button, Card, CardContent, Typography, styled } from "@mui/material"

interface INoteProp{
    note:NoteObject;
    deleteNote: (id: number) => void
}

const StyledCard = styled(Card)`
    width:400px;
    margin:20px
`
const Wrapper=styled(Box)`
    & > button {
    border : 1px solid #000;
    background: #fff;
    margin-top: 5px 
    }
`

const Note:React.FC<INoteProp>=({note, deleteNote})=>{
    return(
        <StyledCard style={{backgroundColor:note.color}}>
            <CardContent>
                <Wrapper>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.details}</Typography>
                    <Typography>{note.date}</Typography>
                    <Button variant="outlined" onClick={()=>deleteNote(note.id)}>Delete</Button>
                </Wrapper>
            </CardContent>
        </StyledCard>
    )
}
export default Note