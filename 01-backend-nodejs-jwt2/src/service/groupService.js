import db from '../models/index';
const getGroups = async () => {
    try {
        let data = await db.Group.findAll({
            order: [['name', 'ASC']]
        });
        return {
            EM: "Get group success",
            EC: 0,// error code
            DT: data, // data
        }
    } catch (error) {
        console.log(error);
        return {
            EM: "Error from server",
            EC: 1,// error code
            DT: [], // data
        }
    }
}

module.exports = {
    getGroups
}