const router = require('express').Router();
const { readNote, readAllNotes, appendNote, deleteNote, updateNote } = require('../../utilities/FS')
// note model import

// grab all notes
router.get('/', async (req, res) => {
    try {
        //fs read from db.json
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// grab a specific note
router.get('/*', async (req, res) => {
    try {
        //fs read from db.json
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// wtites a new note
router.post('/', async (req, res) => {
    try {
        //fs writeToFile
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// update a note
router.post('/*', async (req, res) => {
    try {
        //fs writeToFile
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// delete a note
router.delete('/*', async (req, res) => {
    try {
        //fs delete file
    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = router