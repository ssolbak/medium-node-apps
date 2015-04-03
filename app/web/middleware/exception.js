module.exports = function() {

    return function (err, req, res, next) {

        try {
            //default error handling here (email, logging(
            console.error(err);
        } catch (ex) {
            res.status(500).send("An error has occurred. :(");
        }
    };
};