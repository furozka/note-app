import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NoteCard from './NoteCard'
import Masonry from 'react-masonry-css'

const Notes = () => {
 
    const notes = useSelector((state)=> state.notes.items)


    console.log("notes in notes component: ", notes)
    const color = useSelector((state)=> state.notes.color)
    const filterText = useSelector((state)=>state.notes.filterText)
    console.log("filtertext: ",filterText)
    const filteredNotes = notes.filter((note)=>{
        return note.text.toString().toLowerCase().includes(filterText.toString().toLowerCase())
    })
    console.log(filteredNotes)
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = ()=>{
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    // const breakPointColsObject = {
    //   default: 3,
    //   600: 1,
    //   1000: 2
    // }
    
  return (


    <Masonry
      breakpointCols={width<600 ? 1 : width<1000 ? 2 : 3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {/* array of JSX items */}
      {
            filteredNotes.map((note)=>{
                return(<NoteCard note={note} color={color}  key={note.id}/>)
            })
        }
    </Masonry>
        

  )
}

export default Notes