const express = require("express");
const { createStation, listStations, retrieveStation, updateStation, deleteStation } = require("../controllers/station.controller");

const stationRouter = express.Router();

stationRouter.post("/", createStation);

stationRouter.get("/", listStations);

stationRouter.get("/:id", retrieveStation);

stationRouter.put("/:id", updateStation);

stationRouter.delete("/:id", deleteStation);

module.exports = {
    stationRouter,
}