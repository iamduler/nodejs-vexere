const authorize = (types = ['Admin']) => (req, res, next) => {
    const { user } = req;

    if (types.includes(user.type)) {
        next();
    }
    else {
        res.status(403).send('Permission denied!');
    }
}

module.exports = {
    authorize,
}