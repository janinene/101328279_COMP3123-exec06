const express = require("express")
const routes = express.Router()

const mongoose = require("mongoose")
const noteModel = require('../models/NotesModel.js');


/*
    {
    "noteTitle": "Midterm Exam",
    "noteDescription": "Midterm exam in Full Stack",
    "priority": "HIGH",
    "dateAdded": "10-21-2022",
    "dateUpdated": "10-13-2022"
    }

*/

// TODO - Create a new Note
// http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
        const newNote = new noteModel(req.body)
        const notes = await newNote.save()
        return res.status(201).send(notes)
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    // Validate request

    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
        return res.status(201).send(await noteModel.find())
    
});

// //TODO - Retrieve a single Note with noteId
// //http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
        const oneNote = await noteModel.findById(req.params.noteId)
        return res.status(201).send(oneNote)
});

// //TODO - Update a Note with noteId
// //http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
        const updateNote = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        return res.status(201).send(updateNote)
});

// //TODO - Delete a Note with noteId
// //http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
        const deletedNote = await noteModel.findByIdAndDelete(req.params.noteId)

        if(!deletedNote){
            return res.status(400).send({message: "No Note to delete from this id"})
        }

        return res.status(201).send({
            message: "Note deleted", 
            deletedNote
        })
});




module.exports = routes
