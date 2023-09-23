import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../redux/notes/notesSlice";
import { postAsyncNotes } from "../redux/notes/notesService";

const TextArea = () => {
  const [text, setText] = useState("");
  const color = useSelector((state)=> state.notes.color)
  const dispatch = useDispatch()
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(postAsyncNotes({text, color}))
  
  }
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full sm:w-2/3">
        <form onSubmit={handleSubmit}>
        <textarea className={`${color? color: ""} w-full h-36 p-5`} required={true} onChange={(e)=>setText(e.target.value)}
          
          placeholder="Enter your message here..."
        ></textarea>
        <button type="submit" className={`absolute bottom-9 right-5 w-8 h-4 text-xs ${color==="bg-green-600" ? "bg-neutral-200 text-black": "bg-green-600"} rounded-lg px-5 py-3 sm:px-8 sm:py-5 sm:w-16 sm:h-8 flex text-center items-center text-white justify-center`}>
          ADD
        </button>
        <div className="absolute top-1 right-5">
          <button type="button" onClick={()=>dispatch(changeColor("bg-green-600"))} className={` bg-green-600 h-5 w-5 ${color==="bg-green-600" ? "border-solid border-2 border-sky-500": ""}`}>
          </button>
          <button type="button" onClick={()=>dispatch(changeColor("bg-red-600"))} className={` bg-red-600 h-5 w-5 ml-1 ${color==="bg-red-600" ? "border-solid border-2 border-sky-500": ""}`}>
          </button>
          <button  type="button" onClick={()=>dispatch(changeColor("bg-pink-600"))} className={` bg-pink-600 h-5 w-5  ml-1 ${color==="bg-pink-600" ? "border-solid border-2 border-sky-500": ""}`}>
          </button>
          <button  type="button" onClick={()=>dispatch(changeColor("bg-purple-600"))} className={` bg-purple-600 h-5 w-5  ml-1 ${color==="bg-purple-600" ? "border-solid border-2 border-sky-500": ""}`}>
          </button>
          <button type="button" onClick={()=>dispatch(changeColor("bg-yellow-600"))} className= {`bg-yellow-600 h-5 w-5  ml-1 ${color==="bg-yellow-600" ? "border-solid border-2 border-sky-500": ""}`}>
          </button>
          </div>
        
        
        </form>
        <h3>Selected Color: {color}</h3>
      </div>
    </div>
  );
};

export default TextArea;
