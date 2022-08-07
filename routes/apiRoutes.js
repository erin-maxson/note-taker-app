const router=require("express").Router();
const fs=require("fs");
const {addNewNote} = require("../lib/note_info")
const db=require("../db/db.json");

router.get("/api/notes", (req, res)=>{
     res.json(db);
});

router.post("/api/notes", (req, res)=>{
    console.log(req.body);
    req.body.id = fs();
    const addNote = addNewNote(req.body, notes);
    res.json(addNote);
});

// router.delete("/api/notes", (req, res)=>{
//     const params = req.params.id
//     dbUpdate(params, notes);
//     res.redirect('');
// });

module.exports=router