const router=require("express").Router();
const fs=require("fs");
const {addNewNote, dbUpdate} = require("../lib/note_info")
const db=require("../db/db.json");

router.get("/api/notes",(req,res)=>{
     res.json(db);
})


router.post("/api/notes", (req, res)=>{
    console.log(req.body);
    const addNote = addNewNote(req.body, notes);
    res.json(addNote);
});

    //db is array, think about array function to add new element or value of an array
    //think about update the revised db with new data into the db.json file

router.delete("/api/notes", (req, res)=>{
    const params = req.params.id
    dbUpdate(params, notes);
    res.redirect('');
});

module.exports=router