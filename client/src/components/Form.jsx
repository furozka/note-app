import React from 'react'
import { useDispatch } from 'react-redux'
import { updateFilterText } from '../redux/notes/notesSlice'

const Form = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <input onChange={(e)=>dispatch(updateFilterText(e.target.value))} className='w-72 text-3xl rounded-lg h-auto border-solid my-5' placeholder='Search by text...' type="text" />
    </div>
  )
}

export default Form