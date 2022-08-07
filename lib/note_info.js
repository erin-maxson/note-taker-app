// const {create} = require("domain");
const fs = require("fs");
const path = require('path');

function dbUpdate(id, notesData) {
    const updateNote = id;
    for (let i = 0; i < notesData.length; i++) {
        if (updateNote === notesData[i].id) {
            notesData.splice(i, 1);
            fs.writeFileSync(
                path.join(_dirname, "../db/db.json"),
                JSON.stringify({notes: notesData}, null, 2), err => {
                    if (err) {
                        throw err;
                    }
                });
        }
    }
}

function addNewNote(body, notesData) {
    const createNote = body;
    notesData.push(createNote);
    fs.writeFileSync(
        path.join(_dirname, "../db/db.json"),
        JSON.stringify({notes: notesData}, null, 2)
    );
    return createNote;
};

module.exports = {
    dbUpdate,
    addNewNote
};