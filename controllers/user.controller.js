const { User } = require("../models");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;

    try {
        // Tạo ra 1 chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(10);

        // Mã hóa cái chuỗi + password
        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = await User.create({ name, email, password: hashPassword, numberPhone });
        res.status(201).send(newUser);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: {
                email
            }
        });
        
        if (!user) {
            res.status(500).send({ message: "Invalid email or password." });
            return;
        }

        const isAuth = bcrypt.compareSync(password, user.password);
    
        if (isAuth) {
            res.status(200).send({ message: "Login successfully." });
        }
        else {
            res.status(500).send({ message: "Invalid email or password." });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    register, login
}