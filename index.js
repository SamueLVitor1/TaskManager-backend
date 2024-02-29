const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const TaskRouter = require("./src/routes/task.route");
const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

app.use("/tasks", TaskRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
