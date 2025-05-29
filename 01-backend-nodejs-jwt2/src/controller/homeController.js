// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt2',
});


const handleHelloworld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    // model get database

    return res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    return res.render("home");
}

module.exports = {
    handleHelloworld, handleUserPage, handleCreateNewUser
}