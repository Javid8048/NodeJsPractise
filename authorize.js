
const authorize = (req, res, next) => {
    // console.log(req)
    console.log(req.params)
    console.log(req.query)
    next()
}
const logger = () => {

}

module.exports = authorize;