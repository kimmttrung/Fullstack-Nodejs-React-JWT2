require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
// import connection from "./config/connectDB";

const app = express();

// config view engine
configViewEngine(app);

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection
// connection();

// init web routes
initWebRoutes(app);

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log("JWT2 Backend is running on the port", port);
})

