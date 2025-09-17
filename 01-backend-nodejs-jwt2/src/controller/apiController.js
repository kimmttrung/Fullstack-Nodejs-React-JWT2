const testAPI = (req, res) => {
    return res.status(200).json({
        message: "ok",
        data: "Trung Mai"
    })
}

const handleRegister = (req, res) => {
    console.log("call me", req.body);
}
module.exports = {
    testAPI, handleRegister
}