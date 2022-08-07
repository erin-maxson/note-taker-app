const {create} = require("domain");
const fs = require("fs");
const path = require('path');

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
    addNewNote
}