require("dotenv").config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();

// config view engine
configViewEngine(app);

// init web routes
initWebRoutes(app);

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log("JWT2 Backend is running on the port", port);
})

