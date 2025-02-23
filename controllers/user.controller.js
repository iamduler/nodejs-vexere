const { User, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatarUrl = require("gravatar-url");

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;

    try {
        // Tạo ra 1 chuỗi ngẫu nhiên
        const salt = bcrypt.genSaltSync(10);

        // Mã hóa cái chuỗi + password
        const hashPassword = bcrypt.hashSync(password, salt);

        // Tạo avatar mặc định
        const avatarUrl = gravatarUrl(email);

        const newUser = await User.create({ name, email, password: hashPassword, numberPhone, avatar: avatarUrl });
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
            const token = jwt.sign({ email: user.email, type: user.type }, 'randome-key', { expiresIn: 60 * 60 });
            res.status(200).send({ message: "Login successfully.", token });
        }
        else {
            res.status(500).send({ message: "Invalid email or password." });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const uploadAvatar = async (req, res) => {
    const { user } = req;
    const { file } = req;

    const existedUser = await User.findOne({
        email: user.email
    });

    const imageUrl = `http://localhost:3000/${file.path}`;

    existedUser.avatar = imageUrl;
    await existedUser.save();

    res.status(200).send("Avatar uploaded.");
}

const getAllTrip = async (req, res) => {
    const [result] = await sequelize.query(`
        SELECT * FROM users AS u
        INNER JOIN tickets AS t ON t.user_id = u.id
        INNER JOIN trips AS r ON r.id = t.trip_id
        INNER JOIN stations AS fs ON fs.id = r.fromStation
        INNER JOIN stations AS ts ON ts.id = r.toStation
    `);
    res.send(result);
}

module.exports = {
    register, login, uploadAvatar, getAllTrip
}