const fs = require('fs')

const readNote = (path, item) => {
    const data = fs.readFile(path, async (err) => {
        if (err) throw err
    });
    
    const note = data[item];

    return note
}

const readAllNotes = (path) => {
    return fs.readFile(path, async (err) => {
        if (err) throw err
    })
}

const appendNote = async (path, data) => {
    return fs.appendFile(path, data, (err) => {
        if (err) throw err
    })
};

module.exports = { readNote, readAllNotes, appendNote}