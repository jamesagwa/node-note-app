console.log('Starting note...');
const fs = require('fs');

const fetchNotes = () => {
    try {        
        const noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch(err) {
     return [];   
    }
}

const saveNote = (notes) => {    
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };


    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNote(notes)
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
};

const readNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title === title);

    return filteredNotes[0];
};

const removeNote = (title) => {
    // fetch notes
    // filter the notes and remove the ones that match title
    // save the new notes array

    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNote(filteredNotes);
    console.log('Note removed');
};

const logNote = (note) => {
    console.log('----------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};