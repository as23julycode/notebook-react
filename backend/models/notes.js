const mongoose = require('mongoose');

const NotesSchema = new Schema({
    title : {
        type: 'string',
        require : true
    },
    discription : {
        type : 'string',
        require: true,
    },
    tag : {
        type : 'string', 
        debugger: "General"
    },
    date : {
        type : date,
        default: Date.now
    },
});

module.exports = mongoose.model('notes', NotesSchema);