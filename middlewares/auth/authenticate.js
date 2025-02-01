const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.header('token');

    try {
        const decode = jwt.verify(token, 'randome-key');

        if (!decode) {
            res.status(401).send('Bạn chưa đăng nhập.');
        }
    
        req.user = decode;
        return next();
    }
    catch (error) {
        res.status(401).send('Bạn chưa đăng nhập.');
    }
}

module.exports = {
    authenticate
}