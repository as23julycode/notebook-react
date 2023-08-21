const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    title : {
        type: 'string',
        require : true
    },
    description : {
        type : 'string',
        require: true,
    },
    tag : {
        type : 'string', 
        debugger: "General"
    },
    date : {
        type : "date",
        default: Date.now
    },
});

module.exports = mongoose.model('notes', NotesSchema);