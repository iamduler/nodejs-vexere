const express = require("express");
const { createTrip, listTrips, retrieveTrip, updateTrip, deleteTrip } = require("../controllers/trip.controller");
const { checkExistById } = require("../middlewares/validations/checkExsits");
const { Trip } = require("../models");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");

const tripRouter = express.Router();

tripRouter.post("/", authenticate, authorize(), createTrip);

tripRouter.get("/", listTrips);

tripRouter.get("/:id", retrieveTrip);

tripRouter.put("/:id", checkExistById(Trip), updateTrip);

tripRouter.delete("/:id", authenticate, checkExistById(Trip), deleteTrip);

module.exports = {
    tripRouter,
}