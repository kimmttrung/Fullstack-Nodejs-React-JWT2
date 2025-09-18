import { where } from 'sequelize';
import db from '../models/index'
import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';


const saltRounds = 10;
const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, saltRounds);
    return hashPassword;
}

const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail }
    })
    if (user) {
        return true;
    }
    return false;
}
const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({
        where: { phonenumber: userPhone }
    })
    if (user) {
        return true;
    }
    return false;
}

const registerNewUser = async (rawUserData) => {
    try {
        // check email, phonenumber are axist
        let isEmailExist = await checkEmailExist(rawUserData.email);
        if (isEmailExist === true) {
            return {
                EM: 'The email is alreadly exist',
                EC: 1
            }
        }
        let isPhoneExist = await checkPhoneExist(rawUserData.phone);
        if (isPhoneExist === true) {
            return {
                EM: 'The phone is alreadly exist',
                EC: 1
            }
        }
        // hash user password
        let hashPassword = hashUserPassword(rawUserData.password);

        // create user
        await db.User.create({
            email: rawUserData.email,
            phonenumber: rawUserData.phone,
            password: hashPassword,
            username: rawUserData.username
        })

        return {
            EM: 'A user is created successfully!',
            EC: 0
        }
    } catch (error) {
        console.log("check error", error);
        return {
            EM: 'Something wrongs in service',
            EC: -2
        }
    }
}

const checkPassword = (inputPassword, hashPassword) => {
    return bcrypt.compareSync(inputPassword, hashPassword);
}

const handleUserLogin = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawData.valueLogin },
                    { phonenumber: rawData.valueLogin }
                ]
            }
        })
        // console.log("check user", user)
        if (user) {
            console.log("found user with email/phone");
            let isCorrectPassword = checkPassword(rawData.password, user.password);
            if (isCorrectPassword === true) {
                return {
                    EM: 'ok',
                    EC: 0,
                    DT: ''
                }
            }
        }
        console.log("Input your user with email/phone", rawData.valueLogin);
        return {
            EM: 'Your email/phone or password is incorrect!',
            EC: 1,
            DT: '',

        }
    } catch (error) {
        console.log("check error", error);
        return {
            EM: 'Something wrongs in service',
            EC: -2
        }
    }
}


module.exports = {
    registerNewUser, handleUserLogin
}