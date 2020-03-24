// Liste des modules
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const request = require('request');

const app = express();

// Configuration du module ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); // <--- paramétrage du middleware

// Weather API
let apiKey = '3cfe554bf79498902f33af0ed6e4cf60';
let city = 'toulouse';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

app.listen(8001, () => {
    console.log("Serveur démarré (http://192.168.0.22:8001/) !");
});

app.get("/", (req, res) => {
    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', err);
        } else {
            let weatherOutput = JSON.parse(body)
            const weatherToulouse = {
                temperature: Math.round(`${weatherOutput.main.temp}`),
                main: `${weatherOutput.weather[0].main}`,
                description: `${weatherOutput.weather[0].description}`,
                icon: `${weatherOutput.weather[0].icon}`
            };
            res.render("objet-enfant", { model: weatherToulouse });
        }
    });
});