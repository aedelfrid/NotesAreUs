const router = require('express').Router();
const { readNote, readAllNotes, appendNote, deleteNote, updateNote } = require('../../utilities/FS')
const noteObj = require('../../db/models/note')
const PATH = 'db/db.json'
// grab all notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await readAllNotes(PATH);
        res.json(notes)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// grab a specific note
router.get('/notes/:i', async (req, res) => {
    try {
        const note = await readNote(PATH, req.params.i);
        res.json(note)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// writes a new note
router.post('/notes', async (req, res) => {
    try {
        let title = req.body.title;
        let text = req.body.text;
        const note = new noteObj(title, text) 
        appendNote(PATH, note);
        res.status(200).json('Success!')
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// update a note
router.post('/notes/:i', async (req, res) => {
    try {
        let index = req.params.i
        let title = req.body.title;
        let text = req.body.text;
        const note = new noteObj(title, text) 
        updateNote(PATH,index, note);
        res.status(200).json('Success!')
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// delete a note
router.delete('/notes/:i', async (req, res) => {
    try {
        //fs delete file
        let index = req.params.i
        deleteNote(PATH, index);
        res.status(200).json('Success!')
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = router