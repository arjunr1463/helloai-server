//modules
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//components
const admin = require("./src/admin/api/admin");
const client = require("./src/client/api/client");

const app = express();
const server = http.createServer(app);

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

dotenv.config();
require("./config/db");

admin(app);
client(app);

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log("server running successfully"));
