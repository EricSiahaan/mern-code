const express = require("express");
const connectDB = require("./config/connectDB")

const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("Home page");
});

//Create Task
app.post("/api/tasks", async (req, res) => {

})

const PORT = process.env.PORT || 5000

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
}

startServer()