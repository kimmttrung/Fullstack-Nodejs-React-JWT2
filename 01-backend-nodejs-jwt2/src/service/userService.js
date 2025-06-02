import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

// get the promise implementation, we will use bluebird

const saltRounds = 10;

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, saltRounds);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPassword = hashUserPassword(password);
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt2',
        Promise: bluebird,
    });

    try {
        const [rows, fields] = await connection.execute('INSERT INTO users(email, password, username) VALUES(?, ?, ?)', [email, hashPassword, username]);
    } catch (error) {
        console.log(">>> check error", error);
    }
}

const getListUser = async () => {
    // create the connection, specify bluebird as Promise
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt2',
        Promise: bluebird,
    });
    try {
        // For pool initialization, see above
        const [rows, fields] = await connection.execute('SELECT * FROM users');
        // console.log("check rows", rows);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt2',
        Promise: bluebird,
    });

    try {
        // For pool initialization, see above
        const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt2',
        Promise: bluebird,
    });

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id=?', [id]);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createNewUser, getListUser, deleteUser, getUserById
}

