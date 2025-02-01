const express = require("express");
const { register, login } = require("../controllers/user.controller");
const multer = require("multer");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

const upload = multer({ dest: "./uploads" });
userRouter.post('/upload-avatar', upload.single("avatar"), (req, res) => {
    res.send("Upload avatar...");
})

module.exports = {
    userRouter,
}