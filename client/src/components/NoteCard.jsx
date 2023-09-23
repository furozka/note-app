import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAsyncNotes } from '../redux/notes/notesService'

const NoteCard = ({note}) => {
    const dispatch = useDispatch()
 const handleDestroy = (id)=>{
    dispatch(deleteAsyncNotes(id))
 }
  return (

    <div className={`mx-2 my-2 relative px-6 py-1 overflow-hidden ${note.color}`}>
      <button onClick={()=>handleDestroy(note.id)} className='h-6 w-6 absolute top-1 right-1 text-red-700 bg-black rounded-full flex justify-center items-center hover:text-red-900 hover:bg-zinc-900'>X</button>
      <div style={{maxHeight: "200px"}} className='mx-2 my-2 px-1 overflow-auto relative '>
        <p>{note.text}</p>
        </div>
    </div>
  )
}

export default NoteCard