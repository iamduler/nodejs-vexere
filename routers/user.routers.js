const express = require("express");
const { register, login } = require("../controllers/user.controller");
const multer = require("multer");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Hệ thống sẽ đứng từ file server.js để truy xuất tới folder /public. 
        // Do file router được import & sử dụng trong file server.js
        cb(null, "./public/images/avatar"); // Setup chỗ cần lưu file. 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname); // Đặt lại tên cho file
    }
})

const upload = multer({ storage: storage });
userRouter.post('/upload-avatar', upload.single("avatar"), (req, res) => {
    res.send("Upload avatar...");
})

module.exports = {
    userRouter,
}