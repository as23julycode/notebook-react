const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name : {
        type: 'string',
        require : true
    },
    email : {
        type : 'string',
        require: true,
        unique : true
    },
    password : {
        type : 'string',
        require: true,  
    },
    date : {
        type : "date",
        default: Date.now
    },
    
});

const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User;