const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/notes")
const { body, validationResult } = require("express-validator");

// Routes 1 : Get all Notes GET "/api/notes/fetchallnotes" Login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occurred");
    }
});

// Routes 2 : Add New Notes useing POST "/api/notes/addnotes" Login Required
router.post('/addnote', fetchuser, [
    body("title", "enter valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 char").isLength({ min: 5 }),], async (req, res) => {
        try {

            const { title, description, tag } = req.body;

            // if there are errors then return bad request and error
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(500).json({ errors: error.array() });
            }

            const note = new Notes({
                title,
                description,
                tag,
                user: req.user.id
            })
            const saveNote = await note.save()
            res.json(saveNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("some error occurred");
        }
    }
);

// Routes 3 : Update an excisting Notes using POST "/api/notes/updatenote/" Login Required
router.put("/updatenote/:id", fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;

    try {

        // create new note Object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // find the note to be updated
        let note = await Notes.findById(req.params.id);

        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed to update");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occurred");
    }
}
);

// Routes 4 : Delete an excisting Notes using Delete "/api/notes/updatenote/" Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

    try {


        // find the note to be deleted
        let note = await Notes.findById(req.params.id);

        if (!note) { return res.status(404).send("Not Found") }

        // allow deletion when user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed to update");
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note })
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occurred");
    }
}
);
module.exports = router;