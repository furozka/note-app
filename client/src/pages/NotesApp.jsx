import React, { useEffect } from 'react'
import Form from '../components/Form'
import TextArea from '../components/TextArea'
import Notes from '../components/Notes'
import { useDispatch } from 'react-redux'
import { getAsyncNotes } from '../redux/notes/notesService'


const NotesApp = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAsyncNotes())
  },[dispatch])
  return (
    <div>
        <Form/>
        <TextArea/>
        <Notes/>
    </div>
  )
}

export default NotesApp