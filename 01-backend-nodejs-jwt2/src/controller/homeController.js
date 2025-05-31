import userService from '../service/userService'

const handleHelloworld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    // model get database
    let userList = userService.getListUser();
    console.log(">> check user list", userList);

    return res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    userService.createNewUser(email, password, username);

    return res.render("home");
}

module.exports = {
    handleHelloworld, handleUserPage, handleCreateNewUser
}