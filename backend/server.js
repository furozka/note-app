const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require('body-parser');

app.use(cors());
app.use(json())
app.get("/", (req, res) => {
  res.send("hello");
});

let notes = [
  { text: "Note 1 ", id: "1", color: "bg-green-600" },
  { text: "Note 2 ", id: "2", color: "bg-red-600" },
  { text: "Note 3 ", id: "3", color: "bg-yellow-600" },
];

app.get('/notes', (req,res)=> res.send(notes))

app.post('/notes', (req,res)=>{
    const note = {text: req.body.text, id: crypto.randomUUID(), color: req.body.color}
    notes.push(note)
    return res.send(note)
})

app.delete('/notes/:id', (req,res)=>{
    const id = req.params.id
    const index = notes.findIndex((note)=> note.id==id);
    if(index>-1){
        notes.splice(index,1);
    }
    res.send(notes)
})



app.listen("7000", console.log("Server runing at port 7000"))