const fs = require('fs');

const readNote = async (path, i) => {
    const data = fs.readFileSync(path, 'utf8', (err) => {
        if (err) throw err
        return data
    });

    const file = JSON.parse(data);
    note = file[i]

    return note
};

const readAllNotes = async (path) => {
    const data = fs.readFileSync(path, 'utf8', (err) => {
        if (err) throw err
    });

    const file = JSON.parse(data);

    return file
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

const updateNote = async (path, index, input) => {

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err

        file = JSON.parse(data)
        file.splice(index, 1, input)
        file = JSON.stringify(file);

        fs.writeFile(path, file, (err) => {
            if (err) throw err;
            return console.log('Updated note!')
        })
    })
};


//testFunc = async () => {
    //path = "../db/db.json";

    //const myNote = await readNote(path, 1)

    //console.log(myNote)
//}

//testFunc()

//path = "../db/db.json";

//data =
//{
//"title": "To do",
//"text": "Yo mama"
//};

//index = 3


//deleteNote(path, index);

module.exports = { readNote, readAllNotes, appendNote, deleteNote, updateNote }