//Notes library files which contains all the functions to find, create and delete notes

//Require filesystem and path
const fs = require("fs");
const path = require("path");

//Function that returns the note specified by the ID
function findByID(id, notes){
    const result = notes.filter((note) => note.id === id)[0];
    return result;
}

//Function to create a new note.
//It takes the body content(title, text and ID) and 
//pushes it to the notes array and writes it to the json
function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)
      );
      return note;
}

//Function to delete a note.
//It takes the note to be deleted and removes it from the notes array
//The json is then written with the new data and the modified array is returned
function deleteNote(note, notes){
    const index = notes.findIndex(i => i.id === note.id);
    notes.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes }, null, 2)
      );
      return notes;
}

//Export the functions
module.exports = {
    findByID,
    createNewNote,
    deleteNote
  };