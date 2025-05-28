import express from "express";
import homeController, { handleHelloworld } from "../controller/homeController"

const router = express.Router();

/**
 * 
 * @param
 */
const initWebRoutes = (app) => {
    // path and handle
    router.get("/", homeController.handleHelloworld)

    router.get("/user", homeController.handleUserPage)
    router.get("/homepage", (req, res) => {
        return res.send("homepage");
    })
    router.post("/users/create-user", homeController.handleCreateNewUser)

    return app.use("/", router);
}

export default initWebRoutes;