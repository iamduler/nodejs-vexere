const { Op } = require("sequelize");
const { Trip, Station } = require("../models");

// create
const createTrip = async (req, res) => {
    const { name, fromStation, toStation, startTime, price } = req.body;

    try {
        const newTrip = await Trip.create({ name, fromStation, toStation, startTime, price });
        res.status(201).send(newTrip);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// list
const listTrips = async (req, res) => {
    let { name } = req.query;

    try {
        if (name) {
            var data = await Trip.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                },
                include: [
                    {
                        model: Station
                    }
                ]
            });
        }
        else {
            var data = await Trip.findAll({
                include: [
                    {
                        model: Station,
                        as: "from"
                    }
                ]
            });
        }

        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// retrieve
const retrieveTrip = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Trip.findOne({
            where: {
                id
            }
        });
        
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// update
const updateTrip = async (req, res) => {
    const { id } = req.params;
    const params = req.body;

    try {
        // Find
        let data = await Trip.findOne({
            where: {
                id,
            }
        });
        
        // Update
        data.name = params.name;
        data.fromStation = params.fromStation;
        data.toStation = params.toStation;
        data.startTime = params.startTime;
        data.price = params.price;
        
        await data.save();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// delete
const deleteTrip = async (req, res) => {
    const { id } = req.params;

    try {
        // Find
        let data = await Trip.findOne({
            where: {
                id,
            }
        });
        
        await data.destroy();
        res.status(200).send('Deleted!');
    }
    catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createTrip,
    listTrips,
    retrieveTrip,
    updateTrip,
    deleteTrip
}