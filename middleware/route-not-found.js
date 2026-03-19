
const routeNotFound = (req,res) => {
    res.status(400).json({
        "msg":"router not found"
    })
}

module.exports = { routeNotFound }