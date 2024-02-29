const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(
        process.env.MONGODB_CONNECT_URI
    ).then(() => console.log('Connected to mondodb!'));
};

module.exports = connectToDatabase;
 