const handleHelloworld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    // model get database

    return res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    return res.render("home");
}

module.exports = {
    handleHelloworld, handleUserPage, handleCreateNewUser
}