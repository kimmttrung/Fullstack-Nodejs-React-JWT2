// Get the client
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt2',
});
const saltRounds = 10;

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, saltRounds);
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPassword = hashUserPassword(password);

    connection.query(
        'INSERT INTO users(email, password, username) VALUES(?, ?, ?)', [email, hashPassword, username],
        function (err, results, fields) {
            if (err) {
                console.log(err);
            }
        }
    )
}

const getListUser = () => {
    let users = [];

    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            if (err) {
                console.log(err);
                return users;
            }
            users = results;
            return users;
        }
    )
}

module.exports = {
    createNewUser, getListUser
}

