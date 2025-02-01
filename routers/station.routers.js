const express = require("express");
const { createStation, listStations, retrieveStation, updateStation, deleteStation } = require("../controllers/station.controller");
const { checkExistById } = require("../middlewares/validations/checkExsits");
const { Station } = require("../models");
const { authenticate } = require("../middlewares/auth/authenticate");

const stationRouter = express.Router();

stationRouter.post("/", authenticate, createStation);

stationRouter.get("/", listStations);

stationRouter.get("/:id", retrieveStation);

stationRouter.put("/:id", checkExistById(Station), updateStation);

stationRouter.delete("/:id", authenticate, checkExistById(Station), deleteStation);

module.exports = {
    stationRouter,
}