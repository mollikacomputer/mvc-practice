const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./index");

// database connection 
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log(`Database connection is successful`);
})

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});