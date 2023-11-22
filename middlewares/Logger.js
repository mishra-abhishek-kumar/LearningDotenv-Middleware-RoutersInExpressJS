const log = (req, res, next) => {
    console.log("Inside Middleware");
    next();
}

module.exports = log;