require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import configCors from "./config/cors";
// import connection from "./config/connectDB";

const app = express();
const port = process.env.PORT || 8081;

// cors
configCors(app);

// config view engine
configViewEngine(app);

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connection
// connection();

// init web routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(port, () => {
    console.log("JWT2 Backend is running on the port", port);
})

