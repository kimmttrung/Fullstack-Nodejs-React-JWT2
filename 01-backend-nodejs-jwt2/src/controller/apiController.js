import loginRegisterService from '../service/loginRegisterService';

const testAPI = (req, res) => {
    return res.status(200).json({
        message: "ok",
        data: "Trung Mai"
    })
}

const handleRegister = async (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Error required parameters',
                EC: '1',
                DT: '',
            })
        }
        if (req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                EM: 'Your password must have more than 3 letters',
                EC: '1',
                DT: '',
            })
        }
        // srever create user
        let data = await loginRegisterService.registerNewUser(req.body);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: '',
        })
    } catch (error) {
        return res.status(200).json({
            EM: "Error from server",
            EC: '-1',// error code
            DT: '', // data
        })
    }
}
const handleLogin = async (req, res) => {
    console.log("check", req.body);
}
module.exports = {
    testAPI, handleRegister, handleLogin
}