const express = require("express");
const path = require("path");
const { sequelize } = require("./models");

const app = express();

// Biến đổi các request & reponse ở dạng JSON
app.use(express.json());

// Cài đặt static file
const publicPathDir = path.join(__dirname, "./public");
app.use(express.static(publicPathDir));

// Listen connection event
app.listen(3000, async () => {
    console.log('App listening on http://localhost:3000!');

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } 
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});