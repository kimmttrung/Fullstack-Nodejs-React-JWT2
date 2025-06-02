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
    router.post("/delete-user/:id", homeController.handleDeleteUser)
    router.post("/update-user/:id", homeController.handleUpdateUserPage);
    return app.use("/", router);
}

export default initWebRoutes;