const express = require("express");
const { register, login, uploadAvatar } = require("../controllers/user.controller");
const { uploadImage } = require("../middlewares/upload/upload-images");
const { authenticate } = require("../middlewares/auth/authenticate");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.post('/upload-avatar', authenticate, uploadImage() , uploadAvatar)

module.exports = {
    userRouter,
}