const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://aditya23:aditya23@cluster0.dt20374.mongodb.net/notebook";

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });
};

module.exports = connectToMongo;
