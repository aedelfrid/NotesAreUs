const fs = require('fs');

const readNote = async (path, i) => {
    const file = await fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err

        const note = JSON.parse(data[i]);

        return note
    });
};

const readAllNotes = async (path) => {
    return fs.readFile(path, 'utf8', (err) => {
        if (err) throw err
    
        const file = JSON.parse(data);

        return file
    })
};

const appendNote = async (path, input) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err

        file = JSON.parse(data);
        file.push(input);
        file = JSON.stringify(file);

        fs.writeFile(path, file, (err) => {
            if (err) throw err;
            return console.log('Appended note!')
        })
    });
};

const deleteNote = async (path, i) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err

        file = JSON.parse(data);
        file.pop(i);
        file = JSON.stringify(file)

        fs.writeFile(path, file, (err) => {
            if (err) throw err;
            console.log('Deleted note!')
        })
    })


};

const updateNote = async (path, i, input) => {

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err

        file = JSON.parse(data)
        file.splice(i, 0, input)
        file = JSON.stringify(file);

        fs.writeFile(path, data, (err) => {
            if (err) throw err;
            console.log('Updated note!')
        })
    })
};

//path = "../db/db.json";

//data =
//{
    //"title": "Test Title",
    //"text": "Test text"
//};



//appendNote(path, data);

module.exports = { readNote, readAllNotes, appendNote, deleteNote, updateNote }