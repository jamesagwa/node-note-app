console.log("App starting.");

const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs
.command('add', 'Add a note', {
    title: {
        required: true,
        describe: 'Title of the note',
        alias: 't'
    },
    body: {
        required: true,
        describe: 'Body of the note',
        alias: 'b'
    },
})
.command('list', 'List all the notes')
.help()
.argv;
const command = argv._[0];

if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Found ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    const read = notes.readNote(argv.title);
    if (read) {
        console.log('>> Note found!');
        notes.logNote(read);
    } else {
        console.log('>> Note not found!');
    }
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('>> Note added!');
        notes.logNote(note);
    } else {
        console.log('Note title already taken!');
        console.log('>> Note not added!');
    }
} else {
    console.log('Command not recognized');
}
