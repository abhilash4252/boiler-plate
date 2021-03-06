const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

//Customize -  Add new routers here
const todoRouter = require("./routes/todo.routes");

const app = express();

// TODO Move to ENV varaiables
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));

app.options("*", cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/client/build")));

// Define new routes here
app.use("/api/todos", todoRouter);

// Documentaion of API's
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = app;
