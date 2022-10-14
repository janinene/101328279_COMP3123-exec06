const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    noteTitle : {
        type: String,
        require: true,
    },

    noteDescription : String,

    priority : {
        type: String,
        enum: {
            values: ['high', 'low', 'medium'],
            message: 'value must be LOW, MEDIUM or HIGH only'
        
        },
        lowercase: true,
    },

    dateAdded: Date,

    dateUpdated: Date
    
})


module.exports = mongoose.model("notes", noteSchema)