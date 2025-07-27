import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import db from '../models/index';
import bluebird from 'bluebird';
import { Model, where } from 'sequelize';


// get the promise implementation, we will use bluebird

const saltRounds = 10;

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, saltRounds);
    return hashPassword;
}

const createNewUser = async (email, password, username) => {
    let hashPassword = hashUserPassword(password);

    try {
        await db.User.create({
            email: email,
            password: hashPassword,
            username: username
        })

    } catch (error) {
        console.log(">>> check error", error);
    }
}

const getListUser = async () => {
    const newUser = await db.User.findOne({
        where: { id: 1 },
        attributes: ["id", "email", "username"],
        include: { model: db.Group, attributes: ["name", "description"] },
        raw: true,
        nest: true
    })

    const role = await db.Role.findAll({
        attributes: ["id", "url", "description"],
        include: { model: db.Group, where: { id: 1 }, attributes: ["name", "description"] },
        raw: true,
        nest: true
    })

    console.log("check new user", newUser);
    console.log("check new role", role);

    let users = [];
    users = await db.User.findAll();
    return users;


    // // create the connection, specify bluebird as Promise
    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt2',
    //     Promise: bluebird,
    // });
    // try {
    //     const [rows, fields] = await connection.execute('SELECT * FROM user');
    //     // console.log("check rows", rows);
    //     return rows;
    // } catch (err) {
    //     console.log(err);
    // }
}

const deleteUser = async (userId) => {
    await db.User.destroy({
        where: { id: userId }
    })

    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt2',
    //     Promise: bluebird,
    // });

    // try {
    //     // For pool initialization, see above
    //     const [rows, fields] = await connection.execute('DELETE FROM user WHERE id=?', [id]);
    //     return rows;
    // } catch (err) {
    //     console.log(err);
    // }
}

const getUserById = async (id) => {
    let user = {};
    user = await db.User.findOne({
        where: { id: id }
    })
    return user.get({ plain: true });

    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt2',
    //     Promise: bluebird,
    // });

    // try {
    //     const [rows, fields] = await connection.execute('SELECT * FROM user WHERE id=?', [id]);
    //     return rows;
    // } catch (err) {
    //     console.log(err);
    // }
}

const updateUserInfor = async (email, username, id) => {
    await db.User.update(
        { email: email, username: username },
        {
            where: { id: id }
        }
    )

    // const connection = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt2',
    //     Promise: bluebird,
    // });

    // try {
    //     const [rows, fields] = await connection.execute('UPDATE user SET email = ?, username = ? WHERE id = ?', [email, username, id]);
    //     return rows;
    // } catch (err) {
    //     console.log(err);
    // }
}

module.exports = {
    createNewUser, getListUser, deleteUser, getUserById, updateUserInfor
}

