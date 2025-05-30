// require("dotenv").config();
import dotenv from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

// config view engine
configViewEngine(app);

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init web routes
initWebRoutes(app);

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log("JWT2 Backend is running on the port", port);
})

