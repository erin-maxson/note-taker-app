const router=require("express").Router();
const fs=require("fs");
const db=require("../db/db.json");
const noteID=require("../public/assets/js/noteid");


router.get("/api/notes", (req, res)=>{
    console.log(typeof db);
     res.json(db);
});

router.post("/api/notes", (req, res)=>{
    console.log(req.body);
    const {title, text} = req.body;
    const createNote = {
        title,
        text,
        id: noteID()
    }

    db.push(createNote)
    const noteText = JSON.stringify(db,null,2);
    fs.writeFile(".db/db.json",noteText);

    res.json(db);
});

module.exports=router