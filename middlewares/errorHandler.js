function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: "internal server error",
        message: err.message
    });
};

module.exports = errorsHandler;