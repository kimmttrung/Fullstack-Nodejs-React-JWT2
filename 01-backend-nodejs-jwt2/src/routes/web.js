import express from "express";
import homeController from "../controller/homeController"

const router = express.Router();

/**
 * 
 * @param
 */
const initWebRoutes = (app) => {
    // path and handle
    router.get("/", homeController.handleHelloworld);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);

    return app.use("/", router);
}

export default initWebRoutes;