const testAPI = (req, res) => {
    return res.status(200).json({
        message: "ok",
        data: "Trung Mai"
    })
}
module.exports = {
    testAPI
}