const checkExistById = (Model) => {
    return async (req, res, next) => {
        // Kiểm tra dữ liệu có tồn tại hay không
        const { id } = req.params;
        
        let data = await Model.findOne({
            where: {
                id,
            }
        });
    
        if (!data) {
            res.status(301).send('Invalid id.');
            return;
        }
    
        next();
    }
}

module.exports = {
    checkExistById
}