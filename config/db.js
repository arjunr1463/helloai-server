//modules
const mongoose = require("mongoose");

const uri = process.env.DATABASE;

mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", () => console.error.bind(console, "connection error"));
db.once("open", () => console.log("connected to database successfully"));

module.exports = db;
