const { Op } = require("sequelize");
const { Station } = require("../models");

// create
const createStation = async (req, res) => {
    const { name, address, province } = req.body;

    try {
        const newStation = await Station.create({ name, address, province });
        res.status(201).send(newStation);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// list
const listStations = async (req, res) => {
    let { name } = req.query;

    try {
        if (name) {
            var data = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
        }
        else {
            var data = await Station.findAll();
        }

        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// retrieve
const retrieveStation = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Station.findOne({
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
const updateStation = async (req, res) => {
    const { id } = req.params;
    const params = req.body;

    try {
        // Find
        let data = await Station.findOne({
            where: {
                id,
            }
        });
        
        // Update
        data.name = params.name;
        data.address = params.address;
        data.province = params.province;
        
        await data.save();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// delete
const deleteStation = async (req, res) => {
    const { id } = req.params;

    try {
        // Find
        let data = await Station.findOne({
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
    createStation,
    listStations,
    retrieveStation,
    updateStation,
    deleteStation
}