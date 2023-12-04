const mongoose = require("mongoose")

const connectDB = () => {
    DB_URL = "mongodb://0.0.0.0/SOS"
    // db_url = "mongodb://localhost:27017"

    mongoose.connect(DB_URL);
    const conn = mongoose.connection;

    conn.once('open', () => {
        console.log("Connected to MongoDB")
    })
    conn.on('err', () => {
        console.error("Failed to connect to MongoDB")
        console.log(err)
        process.exit();
    })
}

module.exports = connectDB