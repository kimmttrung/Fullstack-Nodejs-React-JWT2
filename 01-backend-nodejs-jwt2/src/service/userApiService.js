import { where } from 'sequelize';
import db from '../models/index';

const getAllUser = async () => {
    // let data = {
    //     EM: '',
    //     EC: '',
    //     DT: ''
    // }
    try {

        let users = await db.User.findAll({
            attributes: ["id", "email", "username", "phonenumber", "sex", "address"],
            include: { model: db.Group, attributes: ["name", "description"] },
        });
        if (users) {
            return {
                EM: 'Get data success',
                EC: 0,
                DT: users
            }
        } else {
            return {
                EM: 'Get data fail',
                EC: 0,
                DT: [],
            }
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrongs with server ',
            EC: 1,
            DT: [],
        }
    }
}

const getAllUserWithPaginate = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            offset: offset,
            limit: limit
        })

        let totalPages = Math.ceil(count / limit);

        let data = {
            totalRows: count,
            totalPages: totalPages,
            users: rows
        }

        return {
            EM: 'ok fetch user',
            EC: 0,
            DT: data,
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'Something wrongs with server ',
            EC: 1,
            DT: [],
        }
    }
}

const createUserFunc = async (data) => {
    try {
        await db.User.create({
            // 
        })
    } catch (error) {
        console.log(error)
    }
}

const updateUserFunc = async (data) => {
    try {
        let user = await db.User.findOne({
            where: { id: data.id }
        })
        if (user) {
            // update
        } else {
            // not found
        }
    } catch (error) {

    }
}
const deleteUserFunc = async (id) => {
    try {
        await db.User.delete({
            where: { id: id }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUser, createUserFunc, updateUserFunc, deleteUserFunc, getAllUserWithPaginate
}