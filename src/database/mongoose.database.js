const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.nnjlv9x.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCLUSTER`
    ).then(() => console.log('Connected to mondodb!'));
};

module.exports = connectToDatabase;
 