import { createSlice, nanoid } from "@reduxjs/toolkit";
import { deleteAsyncNotes, getAsyncNotes, postAsyncNotes } from "./notesService";


const initialState = {
    items: [],
    color: "bg-green-600",
    filterText: "",
}
export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers:{
        addNote: {
            reducer: (state, action)=>{
                state.items = [...state.items, action.payload]
            },
            prepare: ({text,color})=>{
                return {
                    payload: {
                        text: text,
                        id: nanoid(),
                        color: color
                    }
                }
            }
        },
        changeColor: (state, action)=>{
            state.color = action.payload
        },
        destroyNote: (state,action)=>{
            state.items = state.items.filter((item)=>item.id!==action.payload)
        },
        updateFilterText: (state,action)=>{
            state.filterText = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAsyncNotes.fulfilled, (state,action)=>{
            state.items = action.payload

        })
        .addCase(postAsyncNotes.fulfilled, (state,action)=>{
            state.items= [...state.items, action.payload]
            console.log("response after post: ",action.payload)
        })
        .addCase(deleteAsyncNotes.fulfilled, (state,action)=>{
            state.items = action.payload
        })
        
    }
})

export const { addNote, changeColor, destroyNote, updateFilterText } = notesSlice.actions
export default notesSlice.reducer