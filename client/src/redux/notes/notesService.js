import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
export const getAsyncNotes = createAsyncThunk("notes/getAsyncNotes", async ()=>{
    const res = await fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`)
    return await res.json()
})

export const postAsyncNotes = createAsyncThunk("notes/postAsyncNotes", async (data)=>{
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes`,data)
    console.log(res)
    return await res.data
})

export const deleteAsyncNotes = createAsyncThunk("notes/deleteAsyncNotes", async(id)=>{
    const res = await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/notes/${id}`)
    return res.data
})