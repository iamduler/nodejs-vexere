const express = require("express");
const { register } = require("../controllers/user.controller");
const { User } = require("../models");

const userRouter = express.Router();

userRouter.post("/register", register);

module.exports = {
    userRouter,
}